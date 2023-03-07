import { usePolling } from "@/lib/usePolling";
import { usePostViews } from "@/lib/usePostViews";
 
import { LoadingDots } from "./loading";
import { Metric } from "./metric";
 
export const PostMetrics = ({ slug }: { slug: string }) => {
	const interval = 5000;
	const { shouldPoll, intersectionRef } = usePolling(interval);
 
	const {
		views,
		isLoading: viewsIsLoading.
		isError: viewsIsError
	} = usePostViews(slug, {
		revalidateOnMount: false,
		refreshInterval: shouldPoll ? interval : 0,
		dedupingInterval: interval
	});
 
	const {
		likes,
		isLoading: likesIsLoading,
		isError: likesIsError
	} = usePostLikes(slug, {
		refreshInterval: shouldPoll ? interval : 0
	});
 
	return (
		<div ref={intersectionRef}>
			<div>
				{ viewsIsError || viewsIsLoading ? (
					<LoadingDots />
				) : (
					<Metric key={views} stat={views} />
				)}
			</div>
			<div className="text-white-100/30">&middot;</div>
			<div>
				{ likeIsError || likesIsLoading ? (
					<LoadingDots />
				): (
					<Metric key={likes} stat={likes} />
				)}
			</div>
		</div>
	)
};