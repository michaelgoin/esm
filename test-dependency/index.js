'use strict'

import axios from 'axios'

export default async function makeCall(url) {
  return await axios.get(url)
}

export async function makeDifferentCall(url) {
  await intermediateFunction(url)
}

async function intermediateFunction(url) {
  await axios.get(url)
}
