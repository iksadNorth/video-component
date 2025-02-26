import React from 'react';
import styled from 'styled-components';
import { Container } from '../Container';
import { useTheme } from '../Theme';

const unit = '1.00rem';
const Base = styled(Container)`
    ${({disabled}) => (disabled || false) ? 'display: none;' : ''}

    & > span {
        font-size: 0.75rem;
        font-weight: 700;
        text-align: center;

        color: white;
    }
`;

const rowThen = (then, other) => ({row}) => {
    return row ? then : other;
};
const BaseInputRange = styled.input.attrs({
    type: 'range',
    max: '1', step: '0.01',
})`  
    flex-grow: 1;
    writing-mode: ${rowThen('horizontal-tb', 'sideways-lr')};

    /* range Track 스타일 */
    -webkit-appearance: none;
    outline: none;
    border-radius: 2px;
    background: linear-gradient(${rowThen('-90deg', '180deg')}, white 0%, white 100%);

    /* range thumb 스타일 */
    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        
        ${rowThen('height', 'width')}: calc(${unit} / 2.00);
        ${rowThen('width', 'height')}: calc(${unit});
        
        background: black;
        border-radius: 2px;
    }
`;

export const InputRange = (props) => {
    const { theme } = useTheme();
    const { children, row, style, className, disabled, ...inputProps } = props;
    return (
        <Base row={row} className={className} style={style} disabled={disabled}>
            <span>{children}</span>
            <BaseInputRange 
                {...inputProps}
                row={row} theme={theme}
            />
        </Base>
    );
};
