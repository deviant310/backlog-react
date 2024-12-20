import { memo } from "react";

import { useToggle } from "~/react";

import { Area, Button, Flex, Popup, Title } from "~/infrastructure/ui";

import { ProjectCreateForm } from "../../forms";
import { useProjectCreatePopupToggle } from "../hooks";

export const ProjectCreatePopup = memo(() => {
  const { projectCreatePopupToggleOn, turnProjectCreatePopupToggleOff } =
    useProjectCreatePopupToggle();

  const {
    value: submitting,
    on: startSubmitting,
    off: stopSubmitting,
  } = useToggle();

  return (
    <Popup
      opened={projectCreatePopupToggleOn}
      onClose={turnProjectCreatePopupToggleOff}
    >
      <Area paddingVertical={1.6} width="500px" maxWidth="100%">
        <Area marginHorizontal={4}>
          <Title size={4}>Create project</Title>

          <Area marginTop={3.2} marginBottom={4}>
            <ProjectCreateForm
              submitting={submitting}
              stopSubmitting={stopSubmitting}
            />
          </Area>
        </Area>

        <hr />

        <Area marginHorizontal={4} marginTop={1.2}>
          <Flex gap={0.8} justifyContent="end">
            <Button variant="link" onClick={turnProjectCreatePopupToggleOff}>
              Cancel
            </Button>

            <Button onClick={startSubmitting}>Create project</Button>
          </Flex>
        </Area>
      </Area>
    </Popup>
  );
});
