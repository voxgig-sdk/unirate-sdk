
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { UnirateSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await UnirateSDK.test()
    equal(null !== testsdk, true)
  })

})
