import { Box, FormControl, Heading, Select } from "native-base";
import { useState } from "react";

const Settings = () => {
  const [workDuration, setWorkDuration] = useState(25);
  const [breakDuration, setBreakDuration] = useState(10);

  return (
    <Box width="100%">
      <Heading size="lg">Settings</Heading>
      <FormControl isRequired>
        <FormControl.Label>Work Duration</FormControl.Label>
        <Select
          accessibilityLabel="Choose Work Duration"
          placeholder="Choose Work Duration"
          selectedValue={workDuration}
          onValueChange={(value) => setWorkDuration(value)}
        >
          <Select.Item label="10 minutes" value={10} />
          <Select.Item label="15 minutes" value={15} />
          <Select.Item label="20 minutes" value={20} />
          <Select.Item label="25 minutes" value={25} />
          <Select.Item label="30 minutes" value={30} />
          <Select.Item label="35 minutes" value={35} />
          <Select.Item label="40 minutes" value={40} />
          <Select.Item label="45 minutes" value={45} />
        </Select>
        <FormControl.Label>Break Duration</FormControl.Label>
        <Select
          accessibilityLabel="Choose Break Duration"
          placeholder="Choose Break Duration"
          selectedValue={breakDuration}
          onValueChange={(value) => setBreakDuration(value)}
        >
          <Select.Item label="5 minutes" value={5} />
          <Select.Item label="10 minutes" value={10} />
          <Select.Item label="15 minutes" value={15} />
          <Select.Item label="20 minutes" value={20} />
        </Select>
      </FormControl>
    </Box>
  );
};

export default Settings;
