import { useState, useEffect, useRef, useCallback } from "react";
import { gsap } from "gsap";
import PropTypes from 'prop-types';

/**
 * HomeSlider3 - An improved version of the movie slider component
 * @param {Object[]} list - Array of movie items to display
 * @param {number} delay - Delay before auto-slide starts (in seconds)
 * @param {number} cardsWidth - Width of cards on desktop (in pixels)
 * @param {number} mobileCardsWidth - Width of cards on mobile (in pixels)
 * @param {boolean} showGenres - Whether to show genre information
 * @param {number} autoSlideInterval - Interval between auto-slides (in milliseconds)
 */
export default function HomeSlider3({
    list,
    delay = 2,
    cardsWidth = 300,
    mobileCardsWidth = 200,
    showGenres = false,
    autoSlideInterval = 4000
}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const containerRef = useRef(null);
    const cardRef = useRef(null);
    const autoSlideTimerRef = useRef(null);
    const touchStartX = useRef(0);
    const isDragging = useRef(false);

    // Calculate card width based on screen size
    const getCardWidth = useCallback(() => {
        return window.innerWidth > 1024 ? cardsWidth : mobileCardsWidth;
    }, [cardsWidth, mobileCardsWidth]);

    // GSAP animation for smooth sliding
    const animateSlide = useCallback((targetIndex) => {
        if (!containerRef.current || isAnimating) return;

        setIsAnimating(true);
        const cardWidth = getCardWidth();

        gsap.to(containerRef.current, {
            x: -targetIndex * cardWidth,
            duration: 0.5,
            ease: "power2.out",
            onComplete: () => setIsAnimating(false)
        });
    }, [getCardWidth, isAnimating]);

    // Handle slide change
    const handleSlideChange = useCallback((newIndex) => {
        if (newIndex < 0 || newIndex >= list.length || isAnimating) return;
        setCurrentIndex(newIndex);
        animateSlide(newIndex);
    }, [list.length, isAnimating, animateSlide]);

    // Auto-slide functionality
    const startAutoSlide = useCallback(() => {
        if (autoSlideTimerRef.current) {
            clearInterval(autoSlideTimerRef.current);
        }

        autoSlideTimerRef.current = setInterval(() => {
            handleSlideChange((currentIndex + 1) % list.length);
        }, autoSlideInterval);
    }, [currentIndex, list.length, handleSlideChange, autoSlideInterval]);

    // Touch and mouse event handlers
    const handleStart = useCallback((e) => {
        isDragging.current = true;
        touchStartX.current = e.type === "touchstart" ? e.touches[0].clientX : e.clientX;
        if (autoSlideTimerRef.current) {
            clearInterval(autoSlideTimerRef.current);
        }
    }, []);

    const handleEnd = useCallback((e) => {
        if (!isDragging.current) return;

        const endX = e.type === "touchend" ? e.changedTouches[0].clientX : e.clientX;
        const diff = endX - touchStartX.current;

        if (Math.abs(diff) > 50) {
            handleSlideChange(currentIndex + (diff < 0 ? 1 : -1));
        }

        isDragging.current = false;
        startAutoSlide();
    }, [currentIndex, handleSlideChange, startAutoSlide]);

    // Initialize auto-slide
    useEffect(() => {
        const timeout = setTimeout(startAutoSlide, delay * 1000);
        return () => {
            clearTimeout(timeout);
            clearInterval(autoSlideTimerRef.current);
        };
    }, [delay, startAutoSlide]);

    // Handle window resize
    useEffect(() => {
        const handleResize = () => {
            animateSlide(currentIndex);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [currentIndex, animateSlide]);

    return (
        <div
            className="w-full h-full overflow-hidden"
            onMouseDown={handleStart}
            onMouseUp={handleEnd}
            onMouseLeave={handleEnd}
            onTouchStart={handleStart}
            onTouchEnd={handleEnd}
        >
            <div
                ref={containerRef}
                className="flex gap-10 h-full select-none cursor-grab"
                style={{ transform: 'translateX(0)' }}
            >
                {list.map((movieItem, index) => (
                    <div
                        key={`${movieItem.title}-${index}`}
                        ref={index === 0 ? cardRef : null}
                        className="h-full relative rounded-[10px] overflow-hidden"
                        style={{
                            width: getCardWidth(),
                            minWidth: getCardWidth(),
                            maxWidth: getCardWidth()
                        }}
                    >
                        <img
                            src={movieItem.poster}
                            alt={movieItem.title}
                            className="w-full h-[80%] object-cover rounded-[10px]"
                        />
                        <div className="px-2 py-1.5">
                            <h3 className="text-sm font-medium truncate">
                                {`${index + 1}-${movieItem.title}`}
                            </h3>
                            {showGenres && (
                                <p className="text-sm text-gray-500">
                                    {movieItem.genre}
                                </p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

HomeSlider3.propTypes = {
    list: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            poster: PropTypes.string.isRequired,
            genre: PropTypes.string
        })
    ).isRequired,
    delay: PropTypes.number,
    cardsWidth: PropTypes.number,
    mobileCardsWidth: PropTypes.number,
    showGenres: PropTypes.bool,
    autoSlideInterval: PropTypes.number
}; 