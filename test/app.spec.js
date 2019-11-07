// const regex = /^([\w!#$%&'*+\-\/=?^`{|}]+(\.[\w!#$%&*+\-\/=?^`{|}]+)*|([\w!#$%&*+\-\/=?^`{|}])+)+@(([a-zA-Z\d\-]+\.)+[a-zA-Z]+|\[(\d{1,3}(\.\d{1,3}){3}|IPv6:[\da-fA-F]{0,4}(:[\da-fA-F]{0,4}){1,5}(:\d{1,3}(\.\d{1,3}){3}|(:[\da-fA-F]{0,4}){0,2}))\])$/
const VALID_TEST_DATA = require('./data/valid_email.json')
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
  console.log({ isMatch, regex_contents })
  return isMatch
})

const is_under_50_length = ((data) => {
  const is_length_cleared = (data.length <= 50 ? true : false)
  console.log({is_length_cleard: is_length_cleared})
  return is_length_cleared
})

describe(`正常系: e-mail データ`, () => {
  const parent_data = VALID_TEST_DATA
  console.log({ parent_data: parent_data })

  describe(`regex pattern is matched`, () => {
    const data = VALID_TEST_DATA[0].email

    test(`valid emal data: #1`, async () => {
      console.log({ data })
      const output = execute_regex(data)
      await expect(output).toBeTruthy()
    })
  })

  describe(`email length is under 50`, () => {




  test(`valid emal data: #2`, async () => {
    const data = VALID_TEST_DATA[1].email
    console.log({ data })
    const output = execute_regex(data)
    await expect(output).toBeTruthy()
  })

  test(`valid emal data: #3`, async () => {
    const data = VALID_TEST_DATA[2].email
    console.log({ data })
    const output = execute_regex(data)
    await expect(output).toBeTruthy()
  })

  test(`valid emal data: #4`, async () => {
    const data = VALID_TEST_DATA[3].email
    console.log({ data })
    const output = execute_regex(data)
    await expect(output).toBeTruthy()
  })

  test(`valid emal data: #5`, async () => {
    const data = VALID_TEST_DATA[4].email
    console.log({ data })
    const output = execute_regex(data)
    await expect(output).toBeTruthy()
  })

  test(`valid emal data: #6`, async () => {
    const data = VALID_TEST_DATA[5].email
    console.log({ data })
    const output = execute_regex(data)
    await expect(output).toBeTruthy()
  })

  test(`valid emal data: #7`, async () => {
    const data = VALID_TEST_DATA[6].email
    console.log({ data })
    const output = execute_regex(data)
    await expect(output).toBeTruthy()
  })

  test(`valid emal data: #8`, async () => {
    const data = VALID_TEST_DATA[7].email
    console.log({ data })
    const output = execute_regex(data)
    await expect(output).toBeTruthy()
  })

  test(`valid emal data: #9`, async () => {
    const data = VALID_TEST_DATA[8].email
    console.log({ data })
    const output = execute_regex(data)
    await expect(output).toBeTruthy()
  })

  test(`valid emal data: #10`, async () => {
    const data = VALID_TEST_DATA[9].email
    console.log({ data })
    const output = execute_regex(data)
    await expect(output).toBeTruthy()
  })

  test(`valid emal data: #11`, async () => {
    const data = VALID_TEST_DATA[10].email
    console.log({ data })
    const output = execute_regex(data)
    await expect(output).toBeTruthy()
  })

});

describe(`異常系: e-mail データ`, () => {
  const parent_data = INVALID_TEST_DATA
  console.log({ parent_data: parent_data })

  test(`invalid emal data: #1`, async () => {
    const data = INVALID_TEST_DATA[0].email
    console.log({ data })
    const output = execute_regex(data)
    await expect(output).toBeFalsy()
  })

  test(`invalid emal data: #2`, async () => {
    const data = INVALID_TEST_DATA[1].email
    console.log({ data })
    const output = execute_regex(data)
    await expect(output).toBeFalsy()
  })

  test(`invalid emal data: #3`, async () => {
    const data = INVALID_TEST_DATA[2].email
    console.log({ data })
    const output = execute_regex(data)
    await expect(output).toBeFalsy()
  })

  test(`invalid emal data: #4`, async () => {
    const data = INVALID_TEST_DATA[3].email
    console.log({ data })
    const output = execute_regex(data)
    await expect(output).toBeFalsy()
  })

  test(`invalid emal data: #5`, async () => {
    const data = INVALID_TEST_DATA[4].email
    console.log({ data })
    const output = execute_regex(data)
    await expect(output).toBeFalsy()
  })

  test(`invalid emal data: #6`, async () => {
    const data = INVALID_TEST_DATA[5].email
    console.log({ data })
    const output = execute_regex(data)
    await expect(output).toBeFalsy()
  })

  test(`invalid emal data: #7`, async () => {
    const data = INVALID_TEST_DATA[6].email
    console.log({ data })
    const output = execute_regex(data)
    await expect(output).toBeFalsy()
  })

  test(`invalid emal data: #8`, async () => {
    const data = INVALID_TEST_DATA[7].email
    console.log({ data })
    const output = execute_regex(data)
    await expect(output).toBeFalsy()
  })

  test(`invalid emal data: #9`, async () => {
    const data = INVALID_TEST_DATA[8].email
    console.log({ data })
    const output = execute_regex(data)
    await expect(output).toBeFalsy()
  })

  test(`invalid emal data: #10`, async () => {
    const data = INVALID_TEST_DATA[9].email
    console.log({ data })
    const output = execute_regex(data)
    await expect(output).toBeFalsy()
  })

  test(`invalid emal data: #11`, async () => {
    const data = INVALID_TEST_DATA[10].email
    console.log({ data })
    const output = execute_regex(data)
    await expect(output).toBeFalsy()
  })

  test(`invalid emal data: #12`, async () => {
    const data = INVALID_TEST_DATA[11].email
    console.log({ data })
    const output = execute_regex(data)
    await expect(output).toBeFalsy()
  })

  test(`invalid emal data: #13`, async () => {
    const data = INVALID_TEST_DATA[12].email
    console.log({ data })
    const output = execute_regex(data)
    await expect(output).toBeFalsy()
  })

  test(`invalid emal data: #14`, async () => {
    const data = INVALID_TEST_DATA[13].email
    console.log({ data })
    const output = execute_regex(data)
    await expect(output).toBeFalsy()
  })

  test(`invalid emal data: #15`, async () => {
    const data = INVALID_TEST_DATA[14].email
    console.log({ data })
    const output = execute_regex(data)
    await expect(output).toBeFalsy()
  })

  test(`invalid emal data: #16`, async () => {
    const data = INVALID_TEST_DATA[15].email
    console.log({ data })
    const output = execute_regex(data)
    await expect(output).toBeFalsy()
  })

  test(`invalid emal data: #17`, async () => {
    const data = INVALID_TEST_DATA[16].email
    console.log({ data })
    const output = execute_regex(data)
    await expect(output).toBeFalsy()
  })

  test(`invalid emal data: #18`, async () => {
    const data = INVALID_TEST_DATA[17].email
    console.log({ data })
    const output = execute_regex(data)
    await expect(output).toBeFalsy()
  })

  test(`invalid emal data: #19`, async () => {
    const data = INVALID_TEST_DATA[18].email
    console.log({ data })
    const output = execute_regex(data)
    await expect(output).toBeFalsy()
  })

  test(`invalid emal data: #20`, async () => {
    const data = INVALID_TEST_DATA[19].email
    console.log({ data })
    const output = execute_regex(data)
    await expect(output).toBeFalsy()
  })
});
