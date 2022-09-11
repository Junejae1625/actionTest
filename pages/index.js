import { gql, useQuery } from "@apollo/client"

const FETCH_BOARDS = gql`
  query fetchBoards {
      fetchBoards {
        writer
        title
      }
    }
  
`

const FirstPage = () => {

  const {data} = useQuery(FETCH_BOARDS)


  return(
    <div>

      첫 페이지 입니다.
      {data?.fetchBoards.map((el, i) => (
        <div key={i}>{el.writer}, {el.title}</div>
      ))}
    </div>
  )
}

export default FirstPage