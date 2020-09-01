import React, { useRef, useLayoutEffect } from "react";
import atomize from "@quarkly/atomize"; // Put your HTML here:

const customHtml = `
	<div style="padding: 20px 40px;">Edit sthis widget on the Components's Panel</div>


<style>

.scroll-animate {
    -webkit-animation: fade-in-top .4s cubic-bezier(.39,.575,.565,1) both;
    animation: fade-in-top .4s cubic-bezier(.39,.575,.565,1) both;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
}
.scroll-animate {
    opacity: 1 !important;
    -webkit-transition-duration: 0.1s!important;
    transition-duration: 0.1s!important;
  }
  }


@-webkit-keyframes fade-in-top {
  0% {
    -webkit-transform: translateY(-50px);
            transform: translateY(-50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
}
@keyframes fade-in-top {
  0% {
    -webkit-transform: translateY(-50px);
            transform: translateY(-50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
}

</style>


`;

const EmbedHTML = ({
	children,
	...props
}) => {
	const ref = useRef(null);
	useLayoutEffect(() => {
		ref.current.innerHTML = customHtml;
	}, []);
	return <div {...props} ref={ref} />;
};

export default atomize(EmbedHTML)({
	name: "EmbedHTML",
	normalize: true,
	mixins: true
});