export const toCityName = (value: string, format: 'SHORT' | 'LONG' = 'SHORT') => {
    if(format === 'SHORT') {
      return formatCityShort(value)
    }


    if(value === 'Berlin') {
      return 'Berlin Brandenburg Willy Brandt'
    }

    if(value === 'Wien') {
      return 'Flughafen Wien Schwechat'
    }

    if(value === 'Hamburg') {
      return 'Airport Hamburg Fulsbüttel Helmut Schmidt'
    }

    return value;
  }

const formatCityShort = (value: string) => {
    if(value === 'Berlin') {
      return 'BER'
    }

    if(value === 'Wien') {
      return 'VIE'
    }

    if(value === 'Hamburg') {
      return 'HAM'
    }

    return value;
}
