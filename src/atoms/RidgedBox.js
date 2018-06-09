import GreyBox from './GreyBox'

import borderImage from '../img/border.png'
import borderImageStrong from '../img/border-strong.png'
import borderImageInset from '../img/border-inset.png'

export default GreyBox.extend`
  border-width: 2px;
  border-style: solid;
  border-image:
    url('${({inset, strongBorder}) => inset ? borderImageInset : (strongBorder ? borderImageStrong : borderImage)}')
    ${({inset, strongBorder}) => !inset && strongBorder ? 3 : 2};
`

export { borderImage }
export { borderImageInset }
