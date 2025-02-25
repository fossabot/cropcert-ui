import { hierarchicalRoles } from "@utils/auth.util";
import { ROLES } from "@utils/constants";

const links = [
  {
    title: "Collection Center Actions",
    children: [
      {
        title: "Create Batch",
        description: "Create Batch",
        to: "/batch/create",
        access: hierarchicalRoles(ROLES.COLLECTION_CENTER),
      },
      {
        title: "Update Wet Batch",
        description: "Update wet batch data",
        to: "/batch/list-wet",
        access: hierarchicalRoles(ROLES.COLLECTION_CENTER),
      },
    ],
  },
  {
    title: "Cooperative Actions",
    children: [
      {
        title: "Create Lot",
        description: "Create lot from batches",
        to: "/batch/list",
        access: hierarchicalRoles(ROLES.COOPERATIVE),
      },
      {
        title: "Dispatch Lots",
        description: "Dispatch Lots to Factory",
        to: "/lot/list",
        access: hierarchicalRoles(ROLES.COOPERATIVE),
      },
    ],
  },
  {
    title: "Factory Actions",
    children: [
      {
        title: "Milling Lots",
        description: "Milling lots from factories",
        to: "/lot/milling",
        access: [ROLES.FACTORY, ...hierarchicalRoles(ROLES.UNION)],
      },
    ],
  },
  {
    title: "Union Actions",
    children: [
      {
        title: "Add GRN Number",
        description: "Add GRN Number to Lot(s)",
        to: "/lot/grn",
        access: hierarchicalRoles(ROLES.UNION),
      },
      {
        title: "Add Green Report",
        description: "Add Green Report to Lot(s)",
        to: "/lot/report/list?type=green",
        access: hierarchicalRoles(ROLES.UNION),
      },
      {
        title: "Add Cupping Report",
        description: "Add Cupping Report to Lot(s)",
        to: "/lot/report/list?type=cupping",
        access: hierarchicalRoles(ROLES.UNION),
      },
    ],
  },
  {
    title: "Admin Actions",
    children: [
      {
        title: "Pages",
        description: "Manage Static Pages",
        to: "/page/list",
        access: [ROLES.ADMIN],
      },
    ],
  },
  {
    title: "ODK",
    children: [
      {
        title: "ODK Aggregate",
        description: "View aggregated data on ODK",
        to: "/ODKAggregate/",
        access: [ROLES.ADMIN],
        external: true,
      },
    ],
  },
];

export default links;
