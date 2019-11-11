const VALID_TEST_DATA = require('./data/valid_email.json')

/**
 * ***前提条件***
 * * - 半角数字（10種類）
 * - 半角英字（54種類）
 * - 記号（19種類）
 * - .!#$%&*+-/=?^_`{|}~
 * - 文字数  50バイト以内
 * - @は１つだけ
 * - RFC準拠（アドレス・ドメイン）
 *
 */
const regex = /^[\w!#%&'/=~`\*\+\?\{\}\^\$\-\|]+(\.[\w!#%&'/=~`\*\+\?\{\}\^\$\-\|]+)*@[\w!#%&'/=~`\*\+\?\{\}\^\$\-\|]+(\.[\w!#%&'/=~`\*\+\?\{\}\^\$\-\|]+)*$/

const execute_regex = ((data) => {
  return regex.test(data)
})

const is_under_50_length = ((data) => {
  return data.length <= 50 ? true : false
})

describe(`正常系: e-mail データ`, () => {

  describe(`valid email data: email_both_normal`, () => {

    const data = VALID_TEST_DATA.email_both_normal

    describe(`data: ${data}`, () => {

      it(`should be matched by regex pattern`, () => {
        const regex_output = execute_regex(data)
        expect(regex_output).toBeTruthy()
      })

      it(`should be under 50 length`, () => {
        const length_output = is_under_50_length(data)
        expect(length_output).toBeTruthy()
      })
    })
  })

  describe(`valid email data: email_address_include_dot_char`, () => {

    const data = VALID_TEST_DATA.email_address_include_dot_char

    describe(`data: ${data}`, () => {

      it(`should be matched by regex pattern`, () => {
        const regex_output = execute_regex(data)
        expect(regex_output).toBeTruthy()
      })

      it(`should be under 50 length`, () => {
        const length_output = is_under_50_length(data)
        expect(length_output).toBeTruthy()
      })
    })
  })

  describe(`valid email data: email_domain_include_dot_char`, () => {

    const data = VALID_TEST_DATA.email_domain_include_dot_char

    describe(`data: ${data}`, () => {

      it(`should be matched by regex pattern`, () => {
        const regex_output = execute_regex(data)
        expect(regex_output).toBeTruthy()
      })

      it(`should be under 50 length`, () => {
        const length_output = is_under_50_length(data)
        expect(length_output).toBeTruthy()
      })
    })
  })

  describe(`valid email data: email_address_all_number`, () => {

    const data = VALID_TEST_DATA.email_address_all_number

    describe(`data: ${data}`, () => {

      it(`should be matched by regex pattern`, () => {
        const regex_output = execute_regex(data)
        expect(regex_output).toBeTruthy()
      })

      it(`should be under 50 length`, () => {
        const length_output = is_under_50_length(data)
        expect(length_output).toBeTruthy()
      })
    })
  })

  describe(`valid email data: email_domain_is_name_string`, () => {

    const data = VALID_TEST_DATA.email_domain_is_name_string

    describe(`data: ${data}`, () => {

      it(`should be matched by regex pattern`, () => {
        const regex_output = execute_regex(data)
        expect(regex_output).toBeTruthy()
      })

      it(`should be under 50 length`, () => {
        const length_output = is_under_50_length(data)
        expect(length_output).toBeTruthy()
      })
    })
  })

  describe(`valid email data: email_domain_is_museum_string`, () => {

    const data = VALID_TEST_DATA.email_domain_is_museum_string

    describe(`data: ${data}`, () => {

      it(`should be matched by regex pattern`, () => {
        const regex_output = execute_regex(data)
        expect(regex_output).toBeTruthy()
      })

      it(`should be under 50 length`, () => {
        const length_output = is_under_50_length(data)
        expect(length_output).toBeTruthy()
      })
    })
  })


  describe(`valid email data: email_domain_is_japan_format`, () => {

    const data = VALID_TEST_DATA.email_domain_is_japan_format

    describe(`data: ${data}`, () => {

      it(`should be matched by regex pattern`, () => {
        const regex_output = execute_regex(data)
        expect(regex_output).toBeTruthy()
      })

      it(`should be under 50 length`, () => {
        const length_output = is_under_50_length(data)
        expect(length_output).toBeTruthy()
      })
    })
  })


  describe(`valid email data: email_address_include_exclamatio_char`, () => {

    const data = VALID_TEST_DATA.email_address_include_exclamatio_char

    describe(`data: ${data}`, () => {

      it(`should be matched by regex pattern`, () => {
        const regex_output = execute_regex(data)
        expect(regex_output).toBeTruthy()
      })

      it(`should be under 50 length`, () => {
        const length_output = is_under_50_length(data)
        expect(length_output).toBeTruthy()
      })
    })
  })


  describe(`valid email data: email_domain_include_exclamatio_char`, () => {

    const data = VALID_TEST_DATA.email_domain_include_exclamatio_char

    describe(`data: ${data}`, () => {

      it(`should be matched by regex pattern`, () => {
        const regex_output = execute_regex(data)
        expect(regex_output).toBeTruthy()
      })

      it(`should be under 50 length`, () => {
        const length_output = is_under_50_length(data)
        expect(length_output).toBeTruthy()
      })
    })
  })


  describe(`valid email data: email_address_include_pound_char`, () => {

    const data = VALID_TEST_DATA.email_address_include_pound_char

    describe(`data: ${data}`, () => {

      it(`should be matched by regex pattern`, () => {
        const regex_output = execute_regex(data)
        expect(regex_output).toBeTruthy()
      })

      it(`should be under 50 length`, () => {
        const length_output = is_under_50_length(data)
        expect(length_output).toBeTruthy()
      })
    })
  })


  describe(`valid email data: email_domain_include_pound_char`, () => {

    const data = VALID_TEST_DATA.email_domain_include_pound_char

    describe(`data: ${data}`, () => {

      it(`should be matched by regex pattern`, () => {
        const regex_output = execute_regex(data)
        expect(regex_output).toBeTruthy()
      })

      it(`should be under 50 length`, () => {
        const length_output = is_under_50_length(data)
        expect(length_output).toBeTruthy()
      })
    })
  })


  describe(`valid email data: email_address_include_doller_char`, () => {

    const data = VALID_TEST_DATA.email_address_include_doller_char

    describe(`data: ${data}`, () => {

      it(`should be matched by regex pattern`, () => {
        const regex_output = execute_regex(data)
        expect(regex_output).toBeTruthy()
      })

      it(`should be under 50 length`, () => {
        const length_output = is_under_50_length(data)
        expect(length_output).toBeTruthy()
      })
    })
  })


  describe(`valid email data: email_domain_include_doller_char`, () => {

    const data = VALID_TEST_DATA.email_domain_include_doller_char

    describe(`data: ${data}`, () => {

      it(`should be matched by regex pattern`, () => {
        const regex_output = execute_regex(data)
        expect(regex_output).toBeTruthy()
      })

      it(`should be under 50 length`, () => {
        const length_output = is_under_50_length(data)
        expect(length_output).toBeTruthy()
      })
    })
  })


  describe(`valid email data: email_address_include_percent_char`, () => {

    const data = VALID_TEST_DATA.email_address_include_percent_char

    describe(`data: ${data}`, () => {

      it(`should be matched by regex pattern`, () => {
        const regex_output = execute_regex(data)
        expect(regex_output).toBeTruthy()
      })

      it(`should be under 50 length`, () => {
        const length_output = is_under_50_length(data)
        expect(length_output).toBeTruthy()
      })
    })
  })


  describe(`valid email data: email_domain_include_percent_char`, () => {

    const data = VALID_TEST_DATA.email_domain_include_percent_char

    describe(`data: ${data}`, () => {

      it(`should be matched by regex pattern`, () => {
        const regex_output = execute_regex(data)
        expect(regex_output).toBeTruthy()
      })

      it(`should be under 50 length`, () => {
        const length_output = is_under_50_length(data)
        expect(length_output).toBeTruthy()
      })
    })
  })


  describe(`valid email data: email_address_include_ampersand_char`, () => {

    const data = VALID_TEST_DATA.email_address_include_ampersand_char

    describe(`data: ${data}`, () => {

      it(`should be matched by regex pattern`, () => {
        const regex_output = execute_regex(data)
        expect(regex_output).toBeTruthy()
      })

      it(`should be under 50 length`, () => {
        const length_output = is_under_50_length(data)
        expect(length_output).toBeTruthy()
      })
    })
  })


  describe(`valid email data: email_domain_include_ampersand_char`, () => {

    const data = VALID_TEST_DATA.email_domain_include_ampersand_char

    describe(`data: ${data}`, () => {

      it(`should be matched by regex pattern`, () => {
        const regex_output = execute_regex(data)
        expect(regex_output).toBeTruthy()
      })

      it(`should be under 50 length`, () => {
        const length_output = is_under_50_length(data)
        expect(length_output).toBeTruthy()
      })
    })
  })


  describe(`valid email data: email_address_include_star_char`, () => {

    const data = VALID_TEST_DATA.email_address_include_star_char

    describe(`data: ${data}`, () => {

      it(`should be matched by regex pattern`, () => {
        const regex_output = execute_regex(data)
        expect(regex_output).toBeTruthy()
      })

      it(`should be under 50 length`, () => {
        const length_output = is_under_50_length(data)
        expect(length_output).toBeTruthy()
      })
    })
  })


  describe(`valid email data: email_domain_include_star_char`, () => {

    const data = VALID_TEST_DATA.email_domain_include_star_char

    describe(`data: ${data}`, () => {

      it(`should be matched by regex pattern`, () => {
        const regex_output = execute_regex(data)
        expect(regex_output).toBeTruthy()
      })

      it(`should be under 50 length`, () => {
        const length_output = is_under_50_length(data)
        expect(length_output).toBeTruthy()
      })
    })
  })


  describe(`valid email data: email_address_include_plus_char`, () => {

    const data = VALID_TEST_DATA.email_address_include_plus_char

    describe(`data: ${data}`, () => {

      it(`should be matched by regex pattern`, () => {
        const regex_output = execute_regex(data)
        expect(regex_output).toBeTruthy()
      })

      it(`should be under 50 length`, () => {
        const length_output = is_under_50_length(data)
        expect(length_output).toBeTruthy()
      })
    })
  })

  describe(`valid email data: email_domain_include_plus_chars`, () => {

    const data = VALID_TEST_DATA.email_domain_include_plus_chars

    describe(`data: ${data}`, () => {

      it(`should be matched by regex pattern`, () => {
        const regex_output = execute_regex(data)
        expect(regex_output).toBeTruthy()
      })

      it(`should be under 50 length`, () => {
        const length_output = is_under_50_length(data)
        expect(length_output).toBeTruthy()
      })
    })
  })


  describe(`valid email data: email_address_include_dash_char`, () => {

    const data = VALID_TEST_DATA.email_address_include_dash_char

    describe(`data: ${data}`, () => {

      it(`should be matched by regex pattern`, () => {
        const regex_output = execute_regex(data)
        expect(regex_output).toBeTruthy()
      })

      it(`should be under 50 length`, () => {
        const length_output = is_under_50_length(data)
        expect(length_output).toBeTruthy()
      })
    })
  })


  describe(`valid email data: email_domain_include_dash_char`, () => {

    const data = VALID_TEST_DATA.email_domain_include_dash_char

    describe(`data: ${data}`, () => {

      it(`should be matched by regex pattern`, () => {
        const regex_output = execute_regex(data)
        expect(regex_output).toBeTruthy()
      })

      it(`should be under 50 length`, () => {
        const length_output = is_under_50_length(data)
        expect(length_output).toBeTruthy()
      })
    })
  })


  describe(`valid email data: email_address_include_slash_char`, () => {

    const data = VALID_TEST_DATA.email_address_include_slash_char

    describe(`data: ${data}`, () => {

      it(`should be matched by regex pattern`, () => {
        const regex_output = execute_regex(data)
        expect(regex_output).toBeTruthy()
      })

      it(`should be under 50 length`, () => {
        const length_output = is_under_50_length(data)
        expect(length_output).toBeTruthy()
      })
    })
  })


  describe(`valid email data: email_domain_include_slash_char`, () => {

    const data = VALID_TEST_DATA.email_domain_include_slash_char

    describe(`data: ${data}`, () => {

      it(`should be matched by regex pattern`, () => {
        const regex_output = execute_regex(data)
        expect(regex_output).toBeTruthy()
      })

      it(`should be under 50 length`, () => {
        const length_output = is_under_50_length(data)
        expect(length_output).toBeTruthy()
      })
    })
  })


  describe(`valid email data: email_address_include_equal_char`, () => {

    const data = VALID_TEST_DATA.email_address_include_equal_char

    describe(`data: ${data}`, () => {

      it(`should be matched by regex pattern`, () => {
        const regex_output = execute_regex(data)
        expect(regex_output).toBeTruthy()
      })

      it(`should be under 50 length`, () => {
        const length_output = is_under_50_length(data)
        expect(length_output).toBeTruthy()
      })
    })
  })


  describe(`valid email data: email_domain_include_equal_char`, () => {

    const data = VALID_TEST_DATA.email_domain_include_equal_char

    describe(`data: ${data}`, () => {

      it(`should be matched by regex pattern`, () => {
        const regex_output = execute_regex(data)
        expect(regex_output).toBeTruthy()
      })

      it(`should be under 50 length`, () => {
        const length_output = is_under_50_length(data)
        expect(length_output).toBeTruthy()
      })
    })
  })


  describe(`valid email data: email_address_include_question_char`, () => {

    const data = VALID_TEST_DATA.email_address_include_question_char

    describe(`data: ${data}`, () => {

      it(`should be matched by regex pattern`, () => {
        const regex_output = execute_regex(data)
        expect(regex_output).toBeTruthy()
      })

      it(`should be under 50 length`, () => {
        const length_output = is_under_50_length(data)
        expect(length_output).toBeTruthy()
      })
    })
  })


  describe(`valid email data: email_domain_include_question_char`, () => {

    const data = VALID_TEST_DATA.email_domain_include_question_char

    describe(`data: ${data}`, () => {

      it(`should be matched by regex pattern`, () => {
        const regex_output = execute_regex(data)
        expect(regex_output).toBeTruthy()
      })

      it(`should be under 50 length`, () => {
        const length_output = is_under_50_length(data)
        expect(length_output).toBeTruthy()
      })
    })
  })


  describe(`valid email data: email_address_include_controll_char`, () => {

    const data = VALID_TEST_DATA.email_address_include_controll_char

    describe(`data: ${data}`, () => {

      it(`should be matched by regex pattern`, () => {
        const regex_output = execute_regex(data)
        expect(regex_output).toBeTruthy()
      })

      it(`should be under 50 length`, () => {
        const length_output = is_under_50_length(data)
        expect(length_output).toBeTruthy()
      })
    })
  })


  describe(`valid email data: email_domain_include_controll_char`, () => {

    const data = VALID_TEST_DATA.email_domain_include_controll_char

    describe(`data: ${data}`, () => {

      it(`should be matched by regex pattern`, () => {
        const regex_output = execute_regex(data)
        expect(regex_output).toBeTruthy()
      })

      it(`should be under 50 length`, () => {
        const length_output = is_under_50_length(data)
        expect(length_output).toBeTruthy()
      })
    })
  })


  describe(`valid email data: email_address_include_underscore_chars`, () => {

    const data = VALID_TEST_DATA.email_address_include_underscore_chars

    describe(`data: ${data}`, () => {

      it(`should be matched by regex pattern`, () => {
        const regex_output = execute_regex(data)
        expect(regex_output).toBeTruthy()
      })

      it(`should be under 50 length`, () => {
        const length_output = is_under_50_length(data)
        expect(length_output).toBeTruthy()
      })
    })
  })


  describe(`valid email data: email_domain_include_underscore_chars`, () => {

    const data = VALID_TEST_DATA.email_domain_include_underscore_chars

    describe(`data: ${data}`, () => {

      it(`should be matched by regex pattern`, () => {
        const regex_output = execute_regex(data)
        expect(regex_output).toBeTruthy()
      })

      it(`should be under 50 length`, () => {
        const length_output = is_under_50_length(data)
        expect(length_output).toBeTruthy()
      })
    })
  })


  describe(`valid email data: email_address_include_back_quotation_char`, () => {

    const data = VALID_TEST_DATA.email_address_include_back_quotation_char

    describe(`data: ${data}`, () => {

      it(`should be matched by regex pattern`, () => {
        const regex_output = execute_regex(data)
        expect(regex_output).toBeTruthy()
      })

      it(`should be under 50 length`, () => {
        const length_output = is_under_50_length(data)
        expect(length_output).toBeTruthy()
      })
    })
  })


  describe(`valid email data: email_domain_include_back_quotation_char`, () => {

    const data = VALID_TEST_DATA.email_domain_include_back_quotation_char

    describe(`data: ${data}`, () => {

      it(`should be matched by regex pattern`, () => {
        const regex_output = execute_regex(data)
        expect(regex_output).toBeTruthy()
      })

      it(`should be under 50 length`, () => {
        const length_output = is_under_50_length(data)
        expect(length_output).toBeTruthy()
      })
    })
  })


  describe(`valid email data: email_address_include_left_brace_char`, () => {

    const data = VALID_TEST_DATA.email_address_include_left_brace_char

    describe(`data: ${data}`, () => {

      it(`should be matched by regex pattern`, () => {
        const regex_output = execute_regex(data)
        expect(regex_output).toBeTruthy()
      })

      it(`should be under 50 length`, () => {
        const length_output = is_under_50_length(data)
        expect(length_output).toBeTruthy()
      })
    })
  })


  describe(`valid email data: email_domain_include_left_brace_char`, () => {

    const data = VALID_TEST_DATA.email_domain_include_left_brace_char

    describe(`data: ${data}`, () => {

      it(`should be matched by regex pattern`, () => {
        const regex_output = execute_regex(data)
        expect(regex_output).toBeTruthy()
      })

      it(`should be under 50 length`, () => {
        const length_output = is_under_50_length(data)
        expect(length_output).toBeTruthy()
      })
    })
  })


  describe(`valid email data: email_address_include_right_brace_char`, () => {

    const data = VALID_TEST_DATA.email_address_include_right_brace_char

    describe(`data: ${data}`, () => {

      it(`should be matched by regex pattern`, () => {
        const regex_output = execute_regex(data)
        expect(regex_output).toBeTruthy()
      })

      it(`should be under 50 length`, () => {
        const length_output = is_under_50_length(data)
        expect(length_output).toBeTruthy()
      })
    })
  })


  describe(`valid email data: email_address_include_back_pipe_char`, () => {

    const data = VALID_TEST_DATA.email_address_include_back_pipe_char

    describe(`data: ${data}`, () => {

      it(`should be matched by regex pattern`, () => {
        const regex_output = execute_regex(data)
        expect(regex_output).toBeTruthy()
      })

      it(`should be under 50 length`, () => {
        const length_output = is_under_50_length(data)
        expect(length_output).toBeTruthy()
      })
    })
  })


  describe(`valid email data: email_domain_include_back_pipe_char`, () => {

    const data = VALID_TEST_DATA.email_domain_include_back_pipe_char

    describe(`data: ${data}`, () => {

      it(`should be matched by regex pattern`, () => {
        const regex_output = execute_regex(data)
        expect(regex_output).toBeTruthy()
      })

      it(`should be under 50 length`, () => {
        const length_output = is_under_50_length(data)
        expect(length_output).toBeTruthy()
      })
    })
  })


  describe(`valid email data: email_domain_include_right_brace_char`, () => {

    const data = VALID_TEST_DATA.email_domain_include_right_brace_char

    describe(`data: ${data}`, () => {

      it(`should be matched by regex pattern`, () => {
        const regex_output = execute_regex(data)
        expect(regex_output).toBeTruthy()
      })

      it(`should be under 50 length`, () => {
        const length_output = is_under_50_length(data)
        expect(length_output).toBeTruthy()
      })
    })
  })


  describe(`valid email data: email_address_include_tilde_char`, () => {

    const data = VALID_TEST_DATA.email_address_include_tilde_char

    describe(`data: ${data}`, () => {

      it(`should be matched by regex pattern`, () => {
        const regex_output = execute_regex(data)
        expect(regex_output).toBeTruthy()
      })

      it(`should be under 50 length`, () => {
        const length_output = is_under_50_length(data)
        expect(length_output).toBeTruthy()
      })
    })
  })


  describe(`valid email data: email_domain_include_tilde_char`, () => {

    const data = VALID_TEST_DATA.email_domain_include_tilde_char

    describe(`data: ${data}`, () => {

      it(`should be matched by regex pattern`, () => {
        const regex_output = execute_regex(data)
        expect(regex_output).toBeTruthy()
      })

      it(`should be under 50 length`, () => {
        const length_output = is_under_50_length(data)
        expect(length_output).toBeTruthy()
      })
    })
  })
});