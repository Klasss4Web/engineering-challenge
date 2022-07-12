export  const crypto = `query ($network: EthereumNetwork!, $from: ISO8601DateTime, $till: ISO8601DateTime, $address: [String!]) {
  ethereum(network: $network) {
    transfers(
      options: {desc: "block.timestamp.time"}
      date: {since: $from, till: $till}
      amount: {gt: 1.5}
      currency: {in: $address}
      success: true
    ) {
      block {
        timestamp {
          time(format: "%Y-%m-%d %H:%M:%S")
        }
        height
      }
      date {
        date: date
        dayOfWeek
        dayOfMonth
        year
      }
      count
      __typename
      gasValue
      sender {
        address
      }
      receiver {
        address
      }
      currency {
        address
        symbol
        name
        tokenType
        decimals
      }
      total: amount(calculate: sum, currency: {})
      success
      countBigInt
      entityId
      external
    }
  }
}

`;