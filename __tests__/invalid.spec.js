const INVALID_TEST_DATA = require('./data/invalid_email.json')

/**
 * - 半角数字（10種類）
 * - 半角英字（54種類）
 * - 記号（19種類）
 * - .!#$%&*+-/=?^_`{|}~
 * - 文字数  50バイト以内
 * - @は１つだけ
 * - RFC準拠（アドレス・ドメイン）
 */

const regex = /^[\w!#%&'/=~`\*\+\?\{\}\^\$\-\|]+(\.[\w!#%&'/=~`\*\+\?\{\}\^\$\-\|]+)*@[\w!#%&'/=~`\*\+\?\{\}\^\$\-\|]+(\.[\w!#%&'/=~`\*\+\?\{\}\^\$\-\|]+)*$/


const execute_regex = ((data) => {
  return regex.test(data)
})

const is_under_50_length = ((data) => {
  return (data.length <= 50 ? true : false)
})

describe(`異常系: e-mail データ`, () => {

  describe(`valid email data: email_duplicate_at_sign`, () => {

    const data = INVALID_TEST_DATA.email_duplicate_at_sign

    describe(`data: ${data}`, () => {

      it(`should be matched by regex pattern`, () => {
        const regex_output = execute_regex(data)
        expect(regex_output).toBeFalsy()
      })

      it(`should be under 50 length`, () => {
        const length_output = is_under_50_length(data)
        expect(length_output).toBeTruthy()
      })
    })
  })

  describe(`valid email data: email_address_include_colon_char`, () => {

    const data = INVALID_TEST_DATA.email_address_include_colon_char

    describe(`data: ${data}`, () => {

      it(`should be matched by regex pattern`, () => {
        const regex_output = execute_regex(data)
        expect(regex_output).toBeFalsy()
      })

      it(`should be under 50 length`, () => {
        const length_output = is_under_50_length(data)
        expect(length_output).toBeTruthy()
      })
    })
  })

  describe(`valid email data: email_domain_include_colon_char`, () => {

    const data = INVALID_TEST_DATA.email_domain_include_colon_char

    describe(`data: ${data}`, () => {

      it(`should be matched by regex pattern`, () => {
        const regex_output = execute_regex(data)
        expect(regex_output).toBeFalsy()
      })

      it(`should be under 50 length`, () => {
        const length_output = is_under_50_length(data)
        expect(length_output).toBeTruthy()
      })
    })
  })

  describe(`valid email data: email_address_include_semi_colon_char`, () => {

    const data = INVALID_TEST_DATA.email_address_include_semi_colon_char

    describe(`data: ${data}`, () => {

      it(`should be matched by regex pattern`, () => {
        const regex_output = execute_regex(data)
        expect(regex_output).toBeFalsy()
      })

      it(`should be under 50 length`, () => {
        const length_output = is_under_50_length(data)
        expect(length_output).toBeTruthy()
      })
    })
  })

  describe(`valid email data: email_domain_include_semi_colon_char`, () => {

    const data = INVALID_TEST_DATA.email_domain_include_semi_colon_char

    describe(`data: ${data}`, () => {

      it(`should be matched by regex pattern`, () => {
        const regex_output = execute_regex(data)
        expect(regex_output).toBeFalsy()
      })

      it(`should be under 50 length`, () => {
        const length_output = is_under_50_length(data)
        expect(length_output).toBeTruthy()
      })
    })
  })

  describe(`valid email data: email_address_include_comma_char`, () => {

    const data = INVALID_TEST_DATA.email_address_include_comma_char

    describe(`data: ${data}`, () => {

      it(`should be matched by regex pattern`, () => {
        const regex_output = execute_regex(data)
        expect(regex_output).toBeFalsy()
      })

      it(`should be under 50 length`, () => {
        const length_output = is_under_50_length(data)
        expect(length_output).toBeTruthy()
      })
    })
  })


  describe(`valid email data: email_domain_include_comma_char`, () => {

    const data = INVALID_TEST_DATA.email_domain_include_comma_char

    describe(`data: ${data}`, () => {

      it(`should be matched by regex pattern`, () => {
        const regex_output = execute_regex(data)
        expect(regex_output).toBeFalsy()
      })

      it(`should be under 50 length`, () => {
        const length_output = is_under_50_length(data)
        expect(length_output).toBeTruthy()
      })
    })
  })


  describe(`valid email data: email_domain_all_number`, () => {

    const data = INVALID_TEST_DATA.email_domain_all_number

    describe(`data: ${data}`, () => {

      it(`should be matched by regex pattern`, () => {
        const regex_output = execute_regex(data)
        expect(regex_output).toBeFalsy()
      })

      it(`should be under 50 length`, () => {
        const length_output = is_under_50_length(data)
        expect(length_output).toBeTruthy()
      })
    })
  })


  describe(`valid email data: email_too_long_char`, () => {

    const data = INVALID_TEST_DATA.email_too_long_char

    describe(`data: ${data}`, () => {

      it(`should be matched by regex pattern`, () => {
        const regex_output = execute_regex(data)
        expect(regex_output).toBeTruthy()
      })

      it(`should be under 50 length`, () => {
        const length_output = is_under_50_length(data)
        expect(length_output).toBeFalsy()
      })
    })
  })


  describe(`valid email data: email_not_rfc_format`, () => {

    const data = INVALID_TEST_DATA.email_not_rfc_format

    describe(`data: ${data}`, () => {

      it(`should be matched by regex pattern`, () => {
        const regex_output = execute_regex(data)
        expect(regex_output).toBeFalsy()
      })

      it(`should be under 50 length`, () => {
        const length_output = is_under_50_length(data)
        expect(length_output).toBeTruthy()
      })
    })
  })


  describe(`valid email data: email_address_not_include_alpabet`, () => {

    const data = INVALID_TEST_DATA.email_address_not_include_alpabet

    describe(`data: ${data}`, () => {

      it(`should be matched by regex pattern`, () => {
        const regex_output = execute_regex(data)
        expect(regex_output).toBeFalsy()
      })

      it(`should be under 50 length`, () => {
        const length_output = is_under_50_length(data)
        expect(length_output).toBeTruthy()
      })
    })
  })


  describe(`valid email data: email_address_not_exist`, () => {

    const data = INVALID_TEST_DATA.email_address_not_exist

    describe(`data: ${data}`, () => {

      it(`should be matched by regex pattern`, () => {
        const regex_output = execute_regex(data)
        expect(regex_output).toBeFalsy()
      })

      it(`should be under 50 length`, () => {
        const length_output = is_under_50_length(data)
        expect(length_output).toBeTruthy()
      })
    })
  })


  describe(`valid email data: email_address_include_uppercase_char`, () => {

    const data = INVALID_TEST_DATA.email_address_include_uppercase_char

    describe(`data: ${data}`, () => {

      it(`should be matched by regex pattern`, () => {
        const regex_output = execute_regex(data)
        expect(regex_output).toBeFalsy()
      })

      it(`should be under 50 length`, () => {
        const length_output = is_under_50_length(data)
        expect(length_output).toBeTruthy()
      })
    })
  })


  describe(`valid email data: email_domain_include_uppercase_char`, () => {

    const data = INVALID_TEST_DATA.email_domain_include_uppercase_char

    describe(`data: ${data}`, () => {

      it(`should be matched by regex pattern`, () => {
        const regex_output = execute_regex(data)
        expect(regex_output).toBeFalsy()
      })

      it(`should be under 50 length`, () => {
        const length_output = is_under_50_length(data)
        expect(length_output).toBeTruthy()
      })
    })
  })


  describe(`valid email data: email_not_exist_at_sign`, () => {

    const data = INVALID_TEST_DATA.email_not_exist_at_sign

    describe(`data: ${data}`, () => {

      it(`should be matched by regex pattern`, () => {
        const regex_output = execute_regex(data)
        expect(regex_output).toBeFalsy()
      })

      it(`should be under 50 length`, () => {
        const length_output = is_under_50_length(data)
        expect(length_output).toBeTruthy()
      })
    })
  })


  describe(`valid email data: email_duplicate_domain_part`, () => {

    const data = INVALID_TEST_DATA.email_duplicate_domain_part

    describe(`data: ${data}`, () => {

      it(`should be matched by regex pattern`, () => {
        const regex_output = execute_regex(data)
        expect(regex_output).toBeFalsy()
      })

      it(`should be under 50 length`, () => {
        const length_output = is_under_50_length(data)
        expect(length_output).toBeTruthy()
      })
    })
  })


  describe(`valid email data: email_address_begin_dot_char`, () => {

    const data = INVALID_TEST_DATA.email_address_begin_dot_char

    describe(`data: ${data}`, () => {

      it(`should be matched by regex pattern`, () => {
        const regex_output = execute_regex(data)
        expect(regex_output).toBeFalsy()
      })

      it(`should be under 50 length`, () => {
        const length_output = is_under_50_length(data)
        expect(length_output).toBeTruthy()
      })
    })
  })


  describe(`valid email data: email_address_end_dot_char`, () => {

    const data = INVALID_TEST_DATA.email_address_end_dot_char

    describe(`data: ${data}`, () => {

      it(`should be matched by regex pattern`, () => {
        const regex_output = execute_regex(data)
        expect(regex_output).toBeFalsy()
      })

      it(`should be under 50 length`, () => {
        const length_output = is_under_50_length(data)
        expect(length_output).toBeTruthy()
      })
    })
  })


  describe(`valid email data: email_address_continue_dot_char`, () => {

    const data = INVALID_TEST_DATA.email_address_continue_dot_char

    describe(`data: ${data}`, () => {

      it(`should be matched by regex pattern`, () => {
        const regex_output = execute_regex(data)
        expect(regex_output).toBeFalsy()
      })

      it(`should be under 50 length`, () => {
        const length_output = is_under_50_length(data)
        expect(length_output).toBeTruthy()
      })
    })
  })


  describe(`valid email data: email_address_include_全角`, () => {

    const data = INVALID_TEST_DATA.email_address_include_全角

    describe(`data: ${data}`, () => {

      it(`should be matched by regex pattern`, () => {
        const regex_output = execute_regex(data)
        expect(regex_output).toBeFalsy()
      })

      it(`should be under 50 length`, () => {
        const length_output = is_under_50_length(data)
        expect(length_output).toBeTruthy()
      })
    })
  })

  describe(`valid email data: email_address_include_brackets_char`, () => {

    const data = INVALID_TEST_DATA.email_address_include_brackets_char

    describe(`data: ${data}`, () => {

      it(`should be matched by regex pattern`, () => {
        const regex_output = execute_regex(data)
        expect(regex_output).toBeFalsy()
      })

      it(`should be under 50 length`, () => {
        const length_output = is_under_50_length(data)
        expect(length_output).toBeTruthy()
      })
    })
  })


  describe(`valid email data: email_domain_not_include_dot_char`, () => {

    const data = INVALID_TEST_DATA.email_domain_not_include_dot_char

    describe(`data: ${data}`, () => {

      it(`should be matched by regex pattern`, () => {
        const regex_output = execute_regex(data)
        expect(regex_output).toBeFalsy()
      })

      it(`should be under 50 length`, () => {
        const length_output = is_under_50_length(data)
        expect(length_output).toBeTruthy()
      })
    })
  })


  describe(`valid email data: email_domain_begin_dash_char`, () => {

    const data = INVALID_TEST_DATA.email_domain_begin_dash_char

    describe(`data: ${data}`, () => {

      it(`should be matched by regex pattern`, () => {
        const regex_output = execute_regex(data)
        expect(regex_output).toBeFalsy()
      })

      it(`should be under 50 length`, () => {
        const length_output = is_under_50_length(data)
        expect(length_output).toBeTruthy()
      })
    })
  })


  describe(`valid email data: email_domain_begin_unique_name`, () => {

    const data = INVALID_TEST_DATA.email_domain_begin_unique_name

    describe(`data: ${data}`, () => {

      it(`should be matched by regex pattern`, () => {
        const regex_output = execute_regex(data)
        expect(regex_output).toBeFalsy()
      })

      it(`should be under 50 length`, () => {
        const length_output = is_under_50_length(data)
        expect(length_output).toBeTruthy()
      })
    })
  })


  describe(`valid email data: email_all_domain_value_is_number`, () => {

    const data = INVALID_TEST_DATA.email_all_domain_value_is_number

    describe(`data: ${data}`, () => {

      it(`should be matched by regex pattern`, () => {
        const regex_output = execute_regex(data)
        expect(regex_output).toBeFalsy()
      })

      it(`should be under 50 length`, () => {
        const length_output = is_under_50_length(data)
        expect(length_output).toBeTruthy()
      })
    })
  })


  describe(`valid email data: email_domain_continue_dot_char`, () => {

    const data = INVALID_TEST_DATA.email_domain_continue_dot_char

    describe(`data: ${data}`, () => {

      it(`should be matched by regex pattern`, () => {
        const regex_output = execute_regex(data)
        expect(regex_output).toBeFalsy()
      })

      it(`should be under 50 length`, () => {
        const length_output = is_under_50_length(data)
        expect(length_output).toBeTruthy()
      })
    })
  })});