import React from "react";
import { storiesOf } from "@storybook/react";
import { array } from "@storybook/addon-knobs";
import { IconPlus } from "components/Glyphs";
import { Breadcrumbs } from "..";

const stories = storiesOf("Components|Breadcrumbs", module);
const defaultCrumbs = [
  "Home",
  "Breadcrumb Item With Longer Text",
  "System",
  "Data",
  "Graphs"
];
const breadCrumbsInfo =
  "A React component that allows users to know their location. Use <Breadcrumbs> and pass it an array of crumbs to render.  Breadcrumb items will expand or contract to fill any allowed space. Truncated breadcrumb items expand to full natural width when hovered or focused to reveal content.";

stories
  .add(
    "Default",
    () => {
      return <Breadcrumbs crumbs={array("crumbs", defaultCrumbs)} />;
    },
    {
      info: {
        text: breadCrumbsInfo
      }
    }
  )
  .add(
    "With limited container size",
    () => {
      return (
        <div
          style={{
            width: "350px",
            border: "1px solid #ddd",
            padding: "4px",
            borderRadius: "2px"
          }}
        >
          <Breadcrumbs crumbs={array("crumbs", defaultCrumbs)} />
        </div>
      );
    },
    {
      info: {
        text: breadCrumbsInfo
      }
    }
  )
  .add(
    "With custom delimiter",
    () => {
      return (
        <div
          style={{
            width: "350px",
            border: "1px solid #ddd",
            padding: "4px",
            borderRadius: "2px"
          }}
        >
          <Breadcrumbs
            crumbs={array("crumbs", defaultCrumbs)}
            delimiter={
              <IconPlus
                size="1em"
                borderWidth={1.5}
                style={{ margin: "auto", color: "blue" }}
              />
            }
          />
        </div>
      );
    },
    {
      info: {
        text: breadCrumbsInfo
      }
    }
  )
  .add(
    "With no delimiter",
    () => {
      return (
        <div
          style={{
            width: "350px",
            border: "1px solid #ddd",
            padding: "4px",
            borderRadius: "2px"
          }}
        >
          <Breadcrumbs
            crumbs={array("crumbs", defaultCrumbs)}
            delimiter={false}
          />
        </div>
      );
    },
    {
      info: {
        text: breadCrumbsInfo
      }
    }
  );
