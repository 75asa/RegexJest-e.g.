// const regex = /^([\w!#$%&'*+\-\/=?^`{|}]+(\.[\w!#$%&*+\-\/=?^`{|}]+)*|([\w!#$%&*+\-\/=?^`{|}])+)+@(([a-zA-Z\d\-]+\.)+[a-zA-Z]+|\[(\d{1,3}(\.\d{1,3}){3}|IPv6:[\da-fA-F]{0,4}(:[\da-fA-F]{0,4}){1,5}(:\d{1,3}(\.\d{1,3}){3}|(:[\da-fA-F]{0,4}){0,2}))\])$/
const INVALID_TEST_DATA = require('./data/invalid_email.json')

/**
 * ***前提条件***
 *
 * - 半角数字（10種類）
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
  let isMatch = false
  isMatch = regex.test(data)
  const regex_contents = data.match(regex)
  // console.log({ isMatch, regex_contents })
  return isMatch
})

const is_under_50_length = ((data) => {
  const is_length_cleared = (data.length <= 50 ? true : false)
  console.log({ is_length_cleard: is_length_cleared })
  return is_length_cleared
})

describe(`正常系: e-mail データ`, () => {

  describe(`invalid emal data: #1`, () => {
    const data = INVALID_TEST_DATA[0].email

    describe(`data: ${data}`, () => {

      test(`regex pattern is matched`, async () => {
        const output = execute_regex(data)
        await expect(output).toBeTruthy()
      })

      test(`email length is under 50`, async () => {
        const output = is_under_50_length(data)
        await expect(output).toBeTruthy()
      })
    })
  })

  describe(`invalid emal data: #2`, () => {
    const data = INVALID_TEST_DATA[1].email

    describe(`data: ${data}`, () => {

      test(`regex pattern is matched`, async () => {
        const output = execute_regex(data)
        await expect(output).toBeTruthy()
      })

      test(`email length is under 50`, async () => {
        const output = is_under_50_length(data)
        await expect(output).toBeTruthy()
      })
    })
  })

  describe(`invalid emal data: #3`, () => {
    const data = INVALID_TEST_DATA[2].email

    describe(`data: ${data}`, () => {

      test(`regex pattern is matched`, async () => {
        const output = execute_regex(data)
        await expect(output).toBeTruthy()
      })

      test(`email length is under 50`, async () => {
        const output = is_under_50_length(data)
        await expect(output).toBeTruthy()
      })
    })
  })

  describe(`invalid emal data: #4`, () => {
    const data = INVALID_TEST_DATA[3].email

    describe(`data: ${data}`, () => {

      test(`regex pattern is matched`, async () => {
        const output = execute_regex(data)
        await expect(output).toBeTruthy()
      })

      test(`email length is under 50`, async () => {
        const output = is_under_50_length(data)
        await expect(output).toBeTruthy()
      })
    })
  })

  describe(`invalid emal data: #5`, () => {
    const data = INVALID_TEST_DATA[4].email

    describe(`data: ${data}`, () => {

      test(`regex pattern is matched`, async () => {
        const output = execute_regex(data)
        await expect(output).toBeTruthy()
      })

      test(`email length is under 50`, async () => {
        const output = is_under_50_length(data)
        await expect(output).toBeTruthy()
      })
    })
  })

  describe(`invalid emal data: #6`, () => {
    const data = INVALID_TEST_DATA[5].email

    describe(`data: ${data}`, () => {

      test(`regex pattern is matched`, async () => {
        const output = execute_regex(data)
        await expect(output).toBeTruthy()
      })

      test(`email length is under 50`, async () => {
        const output = is_under_50_length(data)
        await expect(output).toBeTruthy()
      })
    })
  })

  describe(`invalid emal data: #7`, () => {
    const data = INVALID_TEST_DATA[6].email

    describe(`data: ${data}`, () => {

      test(`regex pattern is matched`, async () => {
        const output = execute_regex(data)
        await expect(output).toBeTruthy()
      })

      test(`email length is under 50`, async () => {
        const output = is_under_50_length(data)
        await expect(output).toBeTruthy()
      })
    })
  })

  describe(`invalid emal data: #8`, () => {
    const data = INVALID_TEST_DATA[7].email

    describe(`data: ${data}`, () => {

      test(`regex pattern is matched`, async () => {
        const output = execute_regex(data)
        await expect(output).toBeTruthy()
      })

      test(`email length is under 50`, async () => {
        const output = is_under_50_length(data)
        await expect(output).toBeTruthy()
      })
    })
  })

  describe(`invalid emal data: #9`, () => {
    const data = INVALID_TEST_DATA[8].email

    describe(`data: ${data}`, () => {

      test(`regex pattern is matched`, async () => {
        const output = execute_regex(data)
        await expect(output).toBeTruthy()
      })

      test(`email length is under 50`, async () => {
        const output = is_under_50_length(data)
        await expect(output).toBeTruthy()
      })
    })
  })

  describe(`invalid emal data: #10`, () => {
    const data = INVALID_TEST_DATA[9].email

    describe(`data: ${data}`, () => {

      test(`regex pattern is matched`, async () => {
        const output = execute_regex(data)
        await expect(output).toBeTruthy()
      })

      test(`email length is under 50`, async () => {
        const output = is_under_50_length(data)
        await expect(output).toBeTruthy()
      })
    })
  })

  describe(`invalid emal data: #11`, () => {
    const data = INVALID_TEST_DATA[10].email

    describe(`data: ${data}`, () => {

      test(`regex pattern is matched`, async () => {
        const output = execute_regex(data)
        await expect(output).toBeTruthy()
      })

      test(`email length is under 50`, async () => {
        const output = is_under_50_length(data)
        await expect(output).toBeTruthy()
      })
    })
  })
});