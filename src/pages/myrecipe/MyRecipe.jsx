import React from "react";
import { Container, FullDivider, Page } from "../community/style";
import { CommunityHeader } from "../../components/communitycomponents/CommunityHeader";

// 마이레시피 전용 정렬 옵션(원하는 대로 수정 가능)
const MYRECIPE_SORT_OPTIONS = [
  { key: "saved_latest", label: "최근순" },
  { key: "saved_oldest", label: "조리 빠른순" },
  { key: "name_asc", label: "난이도 낮은순" },
];

const MyRecipe = () => {
  return (
    <Page>
      <Container>
        <CommunityHeader
          title="오늘의 추천요리"
          placeholder="요리명, 코멘트, 재료로 검색..."
          showSort={true}
          sortOptions={MYRECIPE_SORT_OPTIONS}
          defaultSortKey="saved_latest"
          onSearch={({ keyword, sort }) => {
            console.log("마이레시피 검색", { keyword, sort });
          }}
          onSortChange={(opt) => {
            console.log("마이레시피 정렬 변경", opt);
          }}
        />
      </Container>

      <FullDivider />  

      <Container>
        {/* 정렬바(추가로 따로 두고 싶으면 여기) */}
        {/* 카드 그리드 */}
        {/* 페이지네이션 */}
      </Container>
    </Page>
  );
};

export default MyRecipe;
