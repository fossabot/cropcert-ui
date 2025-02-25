import Container from "@components/@core/container";
import LotMilling from "@components/lot/milling";
import { hierarchicalRoles } from "@utils/auth.util";
import { ROLES } from "@utils/constants";
import { observer } from "mobx-react-lite";
import React from "react";

const MillingListPage = () => {
  return (
    <Container roles={hierarchicalRoles(ROLES.UNION)}>
      <LotMilling />
    </Container>
  );
};

export default observer(MillingListPage);
