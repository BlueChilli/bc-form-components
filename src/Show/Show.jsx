import React from "react";
import posed, { PoseGroup } from "react-pose";
import { fadeInOut, BlurIn } from "./animationStash";

const WrapAnimCreator = animObject => {
    return posed.span(animObject);
};

const animStash = {
    default: fadeInOut,
    BlurIn
};

const getAnimStashFunction = name => {
    return animStash[name] || animStash.default;
};

const Show = ({
    show = true,
    anim = "default",
    animateOnMount = true,
    flipMove = false,
    children,
    ...rest
}) => {
    const WrapAnim = WrapAnimCreator(getAnimStashFunction(anim));

    return (
        <PoseGroup flipMove={flipMove} animateOnMount={animateOnMount} {...rest}>
            {show && (
                <WrapAnim key="one" animateOnMount={true}>
                    {children}
                </WrapAnim>
            )}
        </PoseGroup>
    );
};

export default Show;
