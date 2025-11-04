// Scroll reveal animation utility
export function scrollReveal(
	node: HTMLElement,
	options: {
		delay?: number;
		duration?: number;
		distance?: number;
		origin?: 'top' | 'bottom' | 'left' | 'right';
	} = {}
) {
	const { delay = 0, duration = 800, distance = 50, origin = 'bottom' } = options;

	const transforms = {
		top: `translateY(-${distance}px)`,
		bottom: `translateY(${distance}px)`,
		left: `translateX(-${distance}px)`,
		right: `translateX(${distance}px)`
	};

	node.style.opacity = '0';
	node.style.transform = transforms[origin];
	node.style.transition = `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`;

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					node.style.opacity = '1';
					node.style.transform = 'translate(0, 0)';
					observer.unobserve(node);
				}
			});
		},
		{
			threshold: 0.1,
			rootMargin: '0px 0px -50px 0px'
		}
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
