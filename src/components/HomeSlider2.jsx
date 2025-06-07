import { useState, useEffect, useRef ,useCallback} from "react";
import { gsap } from "gsap";

export default function HomeSlider({ list,delay, cardsWidth,mobileCardsWidth, showGenres }) {
    const [movie, setIndexImg] = useState({ ind: 0, dir: "left" });
    const containerRef = useRef(null);
    const cardRef = useRef(null);
    const cardWidth = useRef(window.innerWidth > 1024 ? cardsWidth : mobileCardsWidth);

    const startX = useRef(0);
    const isDragging = useRef(false);
    const autoSlideInterval = useRef(null);

    if(cardsWidth.includes(" ")) cardsWidth.replace(" ","");
    if(mobileCardsWidth.includes(" ")) mobileCardsWidth.replace(" ","");


    // حساب عرض البطاقة
    // useEffect(() => {
    //     if (cardRef.current) {
    //         const width = cardRef.current.offsetWidth;
    //         cardWidth.current = width + 40; // تقريبًا gap-10
    //     }
    // }, []);

    // GSAP أنميشن
    useEffect(() => {
        if (cardWidth.current) {
            gsap.to(containerRef.current, {
                x: -movie.ind * cardWidth.current,
                duration: 1.5,
                ease: "power2.out"
            });
        }
    }, [movie]);

    // 🔁 دالة السلايدر التلقائي (نخليها برا الاستخدام حتى نقدر نستدعيها بالسحب)
    const startAutoSlide = useCallback(() => {
        autoSlideInterval.current = setInterval(() => {
            setIndexImg(prev => {
                let newInd = prev.dir === "left" ? prev.ind + 1 : prev.ind - 1;
                let newDir = prev.dir;
                if (newInd >= list.length - 1) { 
                    newInd = list.length - 1;
                    newDir = "right";
                } else if (newInd <= 0) {
                    newInd = 0;
                    newDir = "left";
                }

                return { ind: newInd, dir: newDir };
            });
        }, 4000);
    },[list]);

    // ⏱️ تشغيل الأوتو بعد التأخير
    useEffect(() => {
        const timeout = setTimeout(() => {
            startAutoSlide();
        }, 1000 * delay);

        return () => {
            clearTimeout(timeout);
            clearInterval(autoSlideInterval.current);
        };
    }, [list, delay,startAutoSlide]);

    // ➕ دعم السحب
    const handleStart = (e) => {
        clearInterval(autoSlideInterval.current);
        isDragging.current = true;
        startX.current = e.type === "touchstart" ? e.touches[0].clientX : e.clientX;
    };

    const handleEnd = (e) => {
        if (!isDragging.current) return;
        isDragging.current = false;
        const endX = e.type === "touchend" ? e.changedTouches[0].clientX : e.clientX;
        const diff = endX - startX.current;

        if (Math.abs(diff) > 50) {
            setIndexImg(prev => {
                let newInd = prev.ind + (diff < 0 ? 1 : -1);
                newInd = Math.max(0, Math.min(list.length - 1, newInd));
                const newDir = diff < 0 ? "left" : "right";
                return { ind: newInd, dir: newDir };
            });
        }

        // 🟢 بعد انتهاء السحب نرجع نشغل الأوتو-سلايد
        startAutoSlide();
    };

    return (
        <div
            className="w-full h-full overflow-hidden"
            onMouseDown={handleStart}
            // onMouseMove={() => {}} // ما نحتاج handleMove حالياً
            onMouseUp={handleEnd}
            onMouseLeave={handleEnd}
            onTouchStart={handleStart}
            onTouchMove={() => {}}
            onTouchEnd={handleEnd}
        >
            <div
                ref={containerRef}
                className="flex gap-10 h-full select-none cursor-grab"
            >
                {list.map((movieItem, ind) => (
                    <div
                        key={ind + movieItem.title}
                        ref={ind === 0 ? cardRef : null}
                        className={`h-full relative rounded-[10px] 
                            max-w-[${mobileCardsWidth}px]  lg:max-w-[${cardsWidth}px]
                            w-[${mobileCardsWidth}px]  lg:w-[${cardsWidth}px]
                            min-w-[${mobileCardsWidth}px]  lg:min-w-[${cardsWidth}px]
                            `}
                    >
                        <img src={movieItem.poster} alt={movieItem.title}
                            className="w-full lg:h -[80%] rounded-[10px] " />
                        <div className=" px-[5px] py-1.5">
                            {ind + 1 + "-" + (movieItem.title.length > 20 ? movieItem.title.slice(0, 20) + "..." : movieItem.title)}
                        </div>
                        {showGenres==="true" && <div className="px-[5px] text-[15px] text-[#777]  ">{movieItem.genre}</div>}
                    </div>
                ))}
            </div>
        </div>
    );
}
