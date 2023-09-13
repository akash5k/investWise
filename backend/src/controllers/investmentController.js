import prisma from "../utils/prisma.js"

// to get all the parameters
export const getAllParameters = async (req, res, next) => {
  try {
    const data = await prisma.investmentParameter.findMany({
      where: {},
      include: {
        childParams: true,
      },
    })
    return res.status(200).json(data)
  } catch (err) {
    console.log(err)
    res.status(400)
    next(new Error("Some Error Occured"))
  }
}

// adding an investment for a user
export const addInvestment = async (req, res, next) => {
  // const user = req.user.id

  const user = "a604d256-3eb2-49d6-aafc-af1910c17a2e"
  // education parameter
  const parentId = "f3955b85-f40a-45a9-85e2-1635b802f879"
  // child parameter college fees
  const childId = "051e1771-a9c6-423e-8c25-7a78171eeedb"
  const amt = 1000
  const returnAmt = 100000

  try {
    const investment = await prisma.investment.create({
      data: {
        userId: user,
        parameterId: parentId,
        childId: childId,
        amount: amt,
        returnAmount: returnAmt,
      },
    })
    res.status(201).json(investment)
  } catch (err) {
    console.log(err)
    res.status(400)
    next(new Error("Some Error Occured"))
  }
}

// get all investment of a user
export const getAllInvestments = () => {}
