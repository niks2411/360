import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, ArrowRight, MessageCircle } from 'lucide-react';
import BookingModal from './BookingModal';

const WelcomePopup = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isBookingOpen, setIsBookingOpen] = useState(false);

    useEffect(() => {
        // Check if user has seen the popup before in this session
        const hasSeenPopup = sessionStorage.getItem('hasSeenWelcomePopup');

        if (!hasSeenPopup) {
            // Show popup after 2 seconds delay
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        sessionStorage.setItem('hasSeenWelcomePopup', 'true');
    };

    const handleCTA = () => {
        handleClose();
        setIsBookingOpen(true);
    };

    return (
        <>
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{ opacity: 0, y: 100, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.8 }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 15
                        }}
                        className="fixed bottom-6 right-6 z-50 max-w-sm"
                    >
                        <div
                            className="relative rounded-2xl overflow-hidden backdrop-blur-xl shadow-2xl"
                            style={{
                                background: 'linear-gradient(135deg, rgba(12, 33, 21, 0.95) 0%, rgba(10, 10, 10, 0.98) 100%)',
                                border: '1px solid rgba(71, 191, 114, 0.3)',
                                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(71, 191, 114, 0.1)'
                            }}
                        >
                            {/* Glow Effect */}
                            <div
                                className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-30"
                                style={{ background: 'radial-gradient(circle, rgba(71, 191, 114, 0.4) 0%, transparent 70%)' }}
                            />

                            {/* Close Button */}
                            <button
                                onClick={handleClose}
                                className="absolute top-3 right-3 p-1.5 rounded-full transition-all duration-300 hover:bg-white/10 group z-10"
                            >
                                <X className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                            </button>

                            {/* Content */}
                            <div className="p-6 pr-10">
                                {/* Icon */}
                                <motion.div
                                    initial={{ rotate: 0 }}
                                    animate={{ rotate: [0, 15, -15, 0] }}
                                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                                    className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4"
                                    style={{
                                        background: 'linear-gradient(135deg, rgba(71, 191, 114, 0.2) 0%, rgba(71, 191, 114, 0.1) 100%)',
                                        border: '1px solid rgba(71, 191, 114, 0.3)'
                                    }}
                                >
                                    <Sparkles className="w-6 h-6 text-green-400" />
                                </motion.div>

                                {/* Text */}
                                <h3 className="text-lg font-bold text-white mb-2">
                                    Welcome to XD MEDIA! 👋
                                </h3>
                                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                                    Ready to transform your digital presence? Let's build something amazing together.
                                </p>

                                {/* CTA Button */}
                                <motion.button
                                    onClick={handleCTA}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium text-sm transition-all duration-300"
                                    style={{
                                        background: 'linear-gradient(135deg, #47BF72 0%, #3aa85f 100%)',
                                        color: 'white',
                                        boxShadow: '0 4px 15px rgba(71, 191, 114, 0.3)'
                                    }}
                                >
                                    <MessageCircle className="w-4 h-4" />
                                    Get Free Consultation
                                    <ArrowRight className="w-4 h-4" />
                                </motion.button>

                                {/* Secondary Link */}
                                <button
                                    onClick={handleClose}
                                    className="w-full text-center text-xs text-gray-500 hover:text-gray-300 mt-3 transition-colors"
                                >
                                    Maybe later
                                </button>
                            </div>

                            {/* Animated Border Gradient */}
                            <motion.div
                                className="absolute bottom-0 left-0 right-0 h-1"
                                style={{
                                    background: 'linear-gradient(90deg, transparent, #47BF72, transparent)'
                                }}
                                initial={{ scaleX: 0, opacity: 0 }}
                                animate={{ scaleX: 1, opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Booking Modal */}
            <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
        </>
    );
};

export default WelcomePopup;

