interface IGenerateResponsive {
  props: any;
  key: String;
  value: Array<String | null> | string;
}

const getFirstValue = (value: Array<String | null> | string) => {
  if(Array.isArray(value)) 
    return value[0]
  else 
    return value
}

const GenerateResponsive = ({
  props,
  key,
  value
}: IGenerateResponsive) => {
  return `
    ${
      getFirstValue(value) ? 
      `${key}:${getFirstValue(value)};` : ''
    }
    

    @media screen and (min-width: ${props.theme.breakpoints.sm}) {
      ${ Array.isArray(value) && value.length > 1 && value[1] ?
          `${key}:${value[1]}` : ''
      }
    }

    @media screen and (min-width: ${props.theme.breakpoints.md}) {
      ${ Array.isArray(value) && value.length > 2 && value[2] ?
        `${key}:${value[2]}` : ''
    }
    }

    @media screen and (min-width: ${props.theme.breakpoints.lg}) {
      ${ Array.isArray(value) && value.length > 3 && value[3] ?
        `${key}:${value[3]}` : ''
    }
    }

    @media screen and (min-width: ${props.theme.breakpoints.xl}) {
      ${ Array.isArray(value) && value.length > 4 && value[4] ?
        `${key}:${value[4]}` : ''
      }
    }
  `
} 


export default GenerateResponsive;