import InvestmentContext from "./investmentContext"

const InvestmentState = ({ children }) => {
  const value = {}
  return (
    <InvestmentContext.Provider value={value}>
      {children}
    </InvestmentContext.Provider>
  )
}

export default InvestmentState
