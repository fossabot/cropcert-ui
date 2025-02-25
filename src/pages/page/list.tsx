import Container from "@components/@core/container";
import PageList from "@components/page/list";
import { axListPages } from "@services/pages.services";
import { hierarchicalRoles } from "@utils/auth.util";
import { ROLES } from "@utils/constants";
import { flatToTree } from "@utils/pages.util";
import React, { useEffect, useState } from "react";

const PageListPage = () => {
  const [pages, setPages] = useState([] as any);

  const reloadPages = () => {
    axListPages().then(data => setPages(flatToTree(data)));
  };

  useEffect(() => {
    reloadPages();
  }, []);

  return (
    <Container roles={hierarchicalRoles(ROLES.UNION)}>
      <PageList pages={pages} reloadPages={reloadPages} />
    </Container>
  );
};

export default PageListPage;
