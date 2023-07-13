export const formatBalance = ( rawBalance : string ) => {
    const balance = (parseInt(rawBalance) / 1e18).toFixed(4)
  return balance
}
export const formatChainAsNum = (chainIdHex: string) => {
    const chainIdNum = parseInt(chainIdHex)
    return chainIdNum
  }