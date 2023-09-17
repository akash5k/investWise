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
  // education parameter
  const { parentId, childId, amount, returnAmount } = req.body

  try {
    const investment = await prisma.investment.create({
      data: {
        userId: req.user.id,
        parameterId: parentId,
        childId: childId,
        amount: +amount,
        returnAmount: +returnAmount,
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
export const getAllInvestments = async (req, res, next) => {
  try {
    const investments = await prisma.investment.findMany({
      where: {
        userId: req.user.id,
      },
      include: {
        parameter: { select: { name: true } },
        childParameter: { select: { name: true } },
      },
    })
    res.status(200).json(investments)
  } catch (err) {
    console.log(err)
    res.status(400)
    next(new Error("Some Error Occured"))
  }
}
