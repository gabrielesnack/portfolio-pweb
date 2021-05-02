import styled from 'styled-components';
import GenerateResponsive from '@/utils/GenerateReponsive';

interface IPseudoElement {
  p?: Array<String | null> | string;
  top?: Array<String | null> | string;
  bottom?: Array<String | null> | string;
  right?: Array<String | null> | string;

  w?: Array<String | null> | string;
  h?: Array<String | null> | string;
  pt?: Array<String | null> | string;
  pb?: Array<String | null> | string;
  pl?: Array<String | null> | string;
  pr?: Array<String | null> | string;
  mt?: Array<String | null> | string;
  mb?: Array<String | null> | string;
  ml?: Array<String | null> | string;
  mr?: Array<String | null> | string;
  textAlign?: Array<String | null> | string;
}

const PseudoElement = styled.div<IPseudoElement>`
  ${props => props.p && GenerateResponsive({key: 'position', value: props.p, props})}
  ${props => props.top && GenerateResponsive({key: 'top', value: props.top, props})}
  ${props => props.bottom && GenerateResponsive({key: 'bottom', value: props.bottom, props})}
  ${props => props.right && GenerateResponsive({key: 'right', value: props.right, props})}

  ${props => props.w && GenerateResponsive({key: 'width', value: props.w, props})}
  ${props => props.h && GenerateResponsive({key: 'height', value: props.h, props})}
  ${props => props.pt && GenerateResponsive({key: 'padding-top', value: props.pt, props})}
  ${props => props.pb && GenerateResponsive({key: 'padding-bottom', value: props.pb, props})}
  ${props => props.pl && GenerateResponsive({key: 'padding-left', value: props.pl, props})}
  ${props => props.pr && GenerateResponsive({key: 'padding-right', value: props.pr, props})}
  ${props => props.mt && GenerateResponsive({key: 'margin-top', value: props.mt, props})}
  ${props => props.mb && GenerateResponsive({key: 'margin-bottom', value: props.mb, props})}
  ${props => props.ml && GenerateResponsive({key: 'margin-left', value: props.ml, props})}
  ${props => props.mr && GenerateResponsive({key: 'margin-right', value: props.mr, props})}
  ${props => props.textAlign && GenerateResponsive({key: 'text-align', value: props.textAlign, props})}
`

export default PseudoElement;