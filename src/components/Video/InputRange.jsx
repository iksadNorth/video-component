import React, { useContext } from 'react';
import styled from 'styled-components';
import { Container } from '../Container';
import { ThemeContext } from '../Theme';

const unit = '1.00rem';
const Base = styled(Container)`
    & > span {
        font-size: 0.75rem;
        font-weight: 700;
        text-align: center;
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
    background: linear-gradient(${rowThen('-90deg', '180deg')}, ${({theme}) => theme.range_track_max_color} 0%, ${({theme}) => theme.range_track_min_color} 100%);

    /* range thumb 스타일 */
    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        
        ${rowThen('height', 'width')}: calc(${unit} / 2.00);
        ${rowThen('width', 'height')}: calc(${unit});
        
        background:${({theme}) => theme.range_btn_color};
        border-radius: 2px;
    }
`;

export const InputRange = (props) => {
    const { theme } = useContext(ThemeContext);
    const { children, row, style, ...inputProps } = props;
    return (
        <Base row={row} style={style}>
            <span>{children}</span>
            <BaseInputRange 
                {...inputProps}
                row={row} theme={theme}
            />
        </Base>
    );
};
