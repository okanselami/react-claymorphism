/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React, { useRef, useMemo, forwardRef } from 'react';
import styled from 'styled-components';

/**
 * Use claymorphism component for wrapping as.
 */
const Claymorphism = forwardRef(
  (props: IClaymorphismProps & React.HTMLAttributes<any>, forwardedRef: any) => {
    const internalRef = useRef(null);
    const ref = forwardedRef || internalRef;
    const {
      children,
      className,
      as: ClayComponent,
      clayBackgroundColor,
      clayBorderRadius,
      clayOuterShadowColor,
      clayShadowInsetPrimaryColor,
      clayShadowInsetSecondaryColor,
      ...rest
    } = props;

    /**
   *
   */
    const StyledClayMorphism = styled(ClayComponent)`
    background: ${clayBackgroundColor};
    border-radius: ${clayBorderRadius};
    box-shadow: 8px 8px 16px ${clayOuterShadowColor}, inset -8px -8px 16px 0 ${clayShadowInsetPrimaryColor},
      inset 8px 8px 16px 0 ${clayShadowInsetSecondaryColor};
  `;

    /**
   *
   */
    const component = useMemo(
      () => (
        <StyledClayMorphism className={className} {...rest} ref={ref}>
          {children}
        </StyledClayMorphism>
      ),
      [children, rest],
    );

    return component;
  },
);

/** Types and Interfaces */

type TypeClayElement = 'div' | 'section';
export interface IClaymorphismProps {
  children?: JSX.Element | JSX.Element[];
  as: TypeClayElement;
  clayBackgroundColor?: string;
  clayBorderRadius?: string;
  clayOuterShadowColor?: string;
  clayShadowInsetPrimaryColor?: string;
  clayShadowInsetSecondaryColor?: string;
}

Claymorphism.displayName = 'Claymorphism';
Claymorphism.defaultProps = {
  as: 'div',
  clayBackgroundColor: 'rgba(0, 0, 0, 0.005)',
  clayBorderRadius: '32px',
  clayOuterShadowColor: 'rgba(0, 0, 0, 0.25)',
  clayShadowInsetPrimaryColor: 'rgba(0, 0, 0, 0.25)',
  clayShadowInsetSecondaryColor: ' rgba(255, 255, 255, 0.2)',
};

export default Claymorphism;
