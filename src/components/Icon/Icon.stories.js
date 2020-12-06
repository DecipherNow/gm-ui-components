import React from "react";
import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import { number, color, text, boolean, object } from "@storybook/addon-knobs";

import Icon from ".";
import * as Glyphs from "../Glyphs";
import { spacingScale } from "style/styleFunctions";

const glyphNames = [
  "IconActivity",
  "IconAlertTriangle",
  "IconArrowDown",
  "IconArrowDownLeft",
  "IconArrowDownRight",
  "IconArrowEndDown",
  "IconArrowEndLeft",
  "IconArrowEndRight",
  "IconArrowEndUp",
  "IconArrowLeft",
  "IconArrowRight",
  "IconArrowStartDown",
  "IconArrowStartLeft",
  "IconArrowStartRight",
  "IconArrowStartUp",
  "IconArrowUp",
  "IconArrowUpLeft",
  "IconArrowUpRight",
  "IconArt",
  "IconAt",
  "IconBell",
  "IconBookmark",
  "IconBoolean",
  "IconBuilding",
  "IconBusiness",
  "IconCalendar",
  "IconCalendarEvent",
  "IconCalendarEventPin",
  "IconCalendarPlus",
  "IconCard",
  "IconCheckboxChecked",
  "IconCheckboxIndeterminate",
  "IconCheckboxNegative",
  "IconCheckboxUnchecked",
  "IconCheckcircleChecked",
  "IconCheckcircleIndeterminate",
  "IconCheckcircleUnchecked",
  "IconChecklist",
  "IconCheckmark",
  "IconChevronDown",
  "IconChevronDownDouble",
  "IconChevronLeft",
  "IconChevronLeftDouble",
  "IconChevronRight",
  "IconChevronRightDouble",
  "IconChevronUp",
  "IconChevronUpDouble",
  "IconCircle",
  "IconCity",
  "IconCitySkyline",
  "IconCloud",
  "IconCloudUp",
  "IconCog",
  "IconColumnToggle",
  "IconCommentBubble",
  "IconConfiguration",
  "IconContrast",
  "IconCPU",
  "IconCurrencyDollar",
  "IconCycle",
  "IconDash",
  "IconDashboard",
  "IconDocument",
  "IconDownload",
  "IconDuplicate",
  "IconEar",
  "IconEdit",
  "IconEditLines",
  "IconEkg",
  "IconEkgNo",
  "IconEntity",
  "IconEquipment",
  "IconExpand",
  "IconEye",
  "IconEyeNo",
  "IconFile",
  "IconFilePlus",
  "IconFileTypeAudio",
  "IconFileTypeImage",
  "IconFileTypeVideo",
  "IconFilter",
  "IconFlag",
  "IconFolder",
  "IconFolderOpen",
  "IconFunctions",
  "IconGitHub",
  "IconGlobe",
  "IconGrid",
  "IconGroup",
  "IconGroupCircle",
  "IconHashtag",
  "IconHellip",
  "IconHoliday",
  "IconHome",
  "IconHTTP",
  "IconInbox",
  "IconInfo",
  "IconIngressEgress",
  "IconJson",
  "IconKey",
  "IconLanguage",
  "IconLatency",
  "IconLink",
  "IconLinkedIn",
  "IconList",
  "IconLock",
  "IconMagnifier",
  "IconMagnifierCheck",
  "IconMagnifierPlus",
  "IconMagnifierX",
  "IconMail",
  "IconMailbox",
  "IconMaterial",
  "IconMeasurement",
  "IconMemory",
  "IconMinus",
  "IconMove",
  "IconMoveWorkspace",
  "IconNegation",
  "IconNewFolder",
  "IconNewOrganization",
  "IconNews",
  "IconNewWindow",
  "IconNewWorkspace",
  "IconNumber",
  "IconOnOff",
  "IconOrdinal",
  "IconOrganization",
  "IconPathwayProcess",
  "IconPause",
  "IconPercent",
  "IconPerson",
  "IconPhone",
  "IconPin",
  "IconPlace",
  "IconPlaceholder",
  "IconPlay",
  "IconPlus",
  "IconProject",
  "IconProjectB",
  "IconRename",
  "IconReorder",
  "IconScroll",
  "IconSelection",
  "IconSharedFolder",
  "IconShareToPeople",
  "IconSlideshow",
  "IconSocialMention",
  "IconSort09",
  "IconSort90",
  "IconSortAscending",
  "IconSortAZ",
  "IconSortDescending",
  "IconSortZA",
  "IconSpreadsheet",
  "IconSquare",
  "IconStar",
  "IconStatusBroken",
  "IconStatusChecked",
  "IconStepBackward",
  "IconStepForward",
  "IconStop",
  "IconStreetAddress",
  "IconSummary",
  "IconTag",
  "IconTextCursor",
  "IconThreads",
  "IconTimeDigital",
  "IconTimeHourglass",
  "IconToggleColumnLeft",
  "IconToggleColumnRight",
  "IconToggleInspector",
  "IconToggleNavigation",
  "IconTranslation",
  "IconTrash",
  "IconTrashX",
  "IconTriangleDown",
  "IconTriangleLeft",
  "IconTriangleRight",
  "IconTriangleUp",
  "IconTwitter",
  "IconUnlock",
  "IconVellip",
  "IconVersions",
  "IconWeapons",
  "IconWorkspace",
  "IconWww",
  "IconX"
];

const GalleryIconList = styled.ul`
  box-sizing: border-box;
  width: 90vw;
  margin: 0;
  padding: 0;
  font-family: ${({ theme }) => theme.FONT_STACK_DEFAULT};
  font-size: ${props => props.fontSize};
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(14em, 1fr));
  grid-gap: ${spacingScale(2)};
`;

const GalleryIconDemo = styled.li`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: row;
`;

const GalleryIconLabel = styled.p`
  color: ${({ theme }) => theme.COLOR_CONTENT_MUTED};
`;

const stories = storiesOf("Components|Icons", module);

stories
  .add(
    "Default",
    () => {
      const IconCog = Glyphs.IconCog;
      return (
        <IconCog
          stroke={color("stroke", undefined)}
          strokeWidth={number("strokeWidth", undefined)}
          strokeOpacity={number("strokeOpacity", undefined)}
          fill={color("fill")}
          fillOpacity={number("fillOpacity")}
          size={text("size")}
          title={text("title")}
          hasBadge={boolean("hasBadge", false)}
          isNegated={boolean("isNegated", false)}
          negationLineAngle={number("negationLineAngle", undefined)}
          badgeColor={color("badgeColor")}
          badgePosition={object("badgePosition", undefined)}
          badgeSize={text("badgeSize", undefined)}
        />
      );
    },
    {
      info: {
        text:
          "An Icon component that renders a variety of glyphs (see the gallery for all glyph options)."
      }
    }
  )
  .add(
    "Custom Glyphs",
    () => {
      return (
        <Icon
          title={text("title", undefined)}
          size={text("size", undefined)}
          stroke={color("stroke", undefined)}
          strokeWidth={number("strokeWidth", undefined)}
          strokeOpacity={number("strokeOpacity", undefined)}
          fill={color("fill", undefined)}
          fillOpacity={number("fillOpacity", undefined)}
          hasBadge={boolean("hasBadge", undefined)}
          isNegated={boolean("isNegated", undefined)}
          negationLineAngle={number("negationLineAngle", undefined)}
          badgeColor={color("badgeColor", undefined)}
          badgePosition={object("badgePosition", undefined)}
          badgeSize={text("badgeSize", undefined)}
        >
          <svg className="svg-icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="7.4" />
          </svg>
        </Icon>
      );
    },
    {
      info: {
        text:
          "An Icon component that renders a custom glyph. Simply import { Icon } and wrap your custom svg."
      }
    }
  )
  .add("Glyph Gallery", () => {
    return (
      <GalleryIconList fontSize={text("Context font size", "inherit")}>
        {glyphNames.map(glyph => {
          let Glyph = Glyphs[glyph];
          return (
            <GalleryIconDemo key={glyph}>
              <Glyph
                title={glyph}
                size={text("size", undefined)}
                stroke={color("stroke", undefined)}
                strokeWidth={number("strokeWidth", undefined)}
                strokeOpacity={number("strokeOpacity", undefined)}
                fill={color("fill", undefined)}
                fillOpacity={number("fillOpacity", undefined)}
                isNegated={boolean("isNegated", undefined)}
                negationLineAngle={number("negationLineAngle", undefined)}
                negationLineTrim={number("negationLineTrim", undefined)}
                negationLineWidth={number("negationLineWidth", undefined)}
                hasBadge={boolean("hasBadge", undefined)}
                badgeColor={color("badgeColor", undefined)}
                badgePosition={object("badgePosition", undefined)}
                badgeSize={text("badgeSize", undefined)}
              />
              <GalleryIconLabel>{glyph}</GalleryIconLabel>
            </GalleryIconDemo>
          );
        })}
      </GalleryIconList>
    );
  });
