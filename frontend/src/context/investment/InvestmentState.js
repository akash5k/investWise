import { useContext, useState } from "react"
import InvestmentContext from "./investmentContext"
import AuthContext from "../auth/authContext"
import fetcher from "../../utils/fetcher"

const LABELSDATA = [
  {
    id: "6623a8b6-1755-416f-98f2-926bab21b8b6",
    name: "Yourself",
    selfWeight: 0.4,
    childParams: [
      {
        id: "f9f5e065-c1f5-45e2-9434-d6ddb1e30082",
        name: "Health and Wellness",
        selfWeight: 0.2,
        parentId: "6623a8b6-1755-416f-98f2-926bab21b8b6",
      },
      {
        id: "28b898e3-1120-4977-9039-0524901d048a",
        name: "Mental Health Services",
        selfWeight: 0.2,
        parentId: "6623a8b6-1755-416f-98f2-926bab21b8b6",
      },
      {
        id: "9597a4e5-32fd-4efd-9d34-2957d7db5392",
        name: "Travel for Personal Growth",
        selfWeight: 0.22,
        parentId: "6623a8b6-1755-416f-98f2-926bab21b8b6",
      },
      {
        id: "5fca14ad-4ef7-4b68-8780-c57ee22e3d69",
        name: "Lifestyle and Wellbeing",
        selfWeight: 0.22,
        parentId: "6623a8b6-1755-416f-98f2-926bab21b8b6",
      },
      {
        id: "3c6cea45-d936-4fb9-87fb-7ffa6dc19be7",
        name: "Hobbies and Interests",
        selfWeight: 0.22,
        parentId: "6623a8b6-1755-416f-98f2-926bab21b8b6",
      },
      {
        id: "abd27087-c665-49d9-b6d4-13442d6ce202",
        name: "Volunteer and Charity",
        selfWeight: 0.22,
        parentId: "6623a8b6-1755-416f-98f2-926bab21b8b6",
      },
      {
        id: "f4c5f130-7413-46db-8d2d-b73eabc5342e",
        name: "Personal Development Books",
        selfWeight: 0.2,
        parentId: "6623a8b6-1755-416f-98f2-926bab21b8b6",
      },
    ],
  },
  {
    id: "c30e2eb9-05c5-4b3d-85ef-1b124afa5980",
    name: "Skill Building",
    selfWeight: 0.2,
    childParams: [
      {
        id: "ea6f932d-1f11-41c7-8638-66730c79ad38",
        name: "Subscription Services",
        selfWeight: 0.2,
        parentId: "c30e2eb9-05c5-4b3d-85ef-1b124afa5980",
      },
      {
        id: "5fc93e78-9e54-49ee-9777-d88d640cdb3e",
        name: "Software and Tools",
        selfWeight: 0.26,
        parentId: "c30e2eb9-05c5-4b3d-85ef-1b124afa5980",
      },
      {
        id: "21931b13-26ac-4462-a62d-54284f2af1fa",
        name: "Travel for Skill Improvement",
        selfWeight: 0.29,
        parentId: "c30e2eb9-05c5-4b3d-85ef-1b124afa5980",
      },
      {
        id: "a0bac0b8-d2d8-4a40-88b9-3edc37cbd286",
        name: "Courses and Workshops",
        selfWeight: 0.24,
        parentId: "c30e2eb9-05c5-4b3d-85ef-1b124afa5980",
      },
      {
        id: "7c64bd6a-18ab-41ac-a44f-cbf0bfc96aab",
        name: "Certificates and Licenses",
        selfWeight: 0.22,
        parentId: "c30e2eb9-05c5-4b3d-85ef-1b124afa5980",
      },
    ],
  },
  {
    id: "61a83700-d645-4b6f-b570-8be976b8ed61",
    name: "Education",
    selfWeight: 0.2,
    childParams: [
      {
        id: "7bd6931e-b349-4a3f-9ae2-a8a585c18220",
        name: "College Fees",
        selfWeight: 0.2,
        parentId: "61a83700-d645-4b6f-b570-8be976b8ed61",
      },
      {
        id: "3beb5087-fcda-425a-b6ba-24a56c555e0a",
        name: "Online Courses",
        selfWeight: 0.2,
        parentId: "61a83700-d645-4b6f-b570-8be976b8ed61",
      },
      {
        id: "2aca4917-cc24-46df-b2a5-3502667a2be1",
        name: "Educational Software and Tools",
        selfWeight: 0.21,
        parentId: "61a83700-d645-4b6f-b570-8be976b8ed61",
      },
      {
        id: "abf4a26e-2f3b-46ab-af23-74b2133b60e8",
        name: "Textbooks and Learning Material",
        selfWeight: 0.3,
        parentId: "61a83700-d645-4b6f-b570-8be976b8ed61",
      },
      {
        id: "a0b51349-1b98-4085-a9df-33d66df9bf0e",
        name: "Miscellaneous",
        selfWeight: 0.52,
        parentId: "61a83700-d645-4b6f-b570-8be976b8ed61",
      },
      {
        id: "461089e5-8cb1-44a2-bd56-d1c3cbd62f27",
        name: "Private Tutoring",
        selfWeight: 0.22,
        parentId: "61a83700-d645-4b6f-b570-8be976b8ed61",
      },
    ],
  },
  {
    id: "f3955b85-f40a-45a9-85e2-1635b802f879",
    name: "Financial Investments",
    selfWeight: 0.14,
    childParams: [
      {
        id: "2601c0c3-3eef-4974-8868-8882d1b759fa",
        name: "Mutual Funds",
        selfWeight: 0.22,
        parentId: "f3955b85-f40a-45a9-85e2-1635b802f879",
      },
      {
        id: "72c9c19b-f4bb-4441-858d-05ec83c23fbf",
        name: "Bonds",
        selfWeight: 0.22,
        parentId: "f3955b85-f40a-45a9-85e2-1635b802f879",
      },
      {
        id: "5ec708e9-bfd8-4fa4-b6f0-f07ccac31885",
        name: "Stocks",
        selfWeight: 0.22,
        parentId: "f3955b85-f40a-45a9-85e2-1635b802f879",
      },
      {
        id: "797e6cfb-0a49-45e5-ae6d-7d956d9a8936",
        name: "ETFs",
        selfWeight: 0.21,
        parentId: "f3955b85-f40a-45a9-85e2-1635b802f879",
      },
      {
        id: "051e1771-a9c6-423e-8c25-7a78171eeedb",
        name: "Real Estate",
        selfWeight: 0.3,
        parentId: "f3955b85-f40a-45a9-85e2-1635b802f879",
      },
      {
        id: "38267308-b948-4458-bd59-f8543bb62ebf",
        name: "Cryptocurrency",
        selfWeight: 0.4,
        parentId: "f3955b85-f40a-45a9-85e2-1635b802f879",
      },
    ],
  },
]

const parentLabels = [
  "Education",
  "Skill Building",
  "Yourself",
  "Financial Investments",
]
const InvestmentState = ({ children }) => {
  const authContext = useContext(AuthContext)
  const { user } = authContext
  const [investState, setInvestState] = useState({
    investments: [],
    errors: null,
    loading: true,
  })
  console.log("InvestState", investState)

  // get all investments of a user
  const getAllInvestments = async () => {
    const data = await fetcher("/invest/getallinvestments", "GET", {
      Authorization: `Bearer ${user?.token || ""}`,
    })
    console.log(data)
    if (data.error) {
      setInvestState({ ...investState, error: data.error, loading: false })
      return
    }
    setInvestState({ ...investState, investments: data.data, loading: false })
  }

  // add an investment
  const addInvestment = async (parentId, childId, amount, returnAmount) => {
    setInvestState({ ...investState, loading: true })
    const data = await fetcher(
      "/invest/addinvestment",
      "POST",
      {
        Authorization: `Bearer ${user?.token || ""}`,
      },
      { parentId, childId, amount, returnAmount }
    )
    console.log(data)
    if (data.error) {
      setInvestState({ ...investState, error: data.error, loading: false })
      return
    }
    getAllInvestments()
  }

  return (
    <InvestmentContext.Provider
      value={{
        parentLabels,
        getAllInvestments,
        investments: investState.investments,
        loading: investState.loading,
        error: investState.errors,
        addInvestment,
        LABELSDATA,
      }}
    >
      {children}
    </InvestmentContext.Provider>
  )
}

export default InvestmentState
