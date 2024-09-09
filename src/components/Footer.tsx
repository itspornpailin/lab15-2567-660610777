import { Text } from "@mantine/core";
import { footerProps } from "@lib/types";

export default function Footer({ year, fullName, studentId }: footerProps) {
  return (
    <Text c="dimmed" ta="center" mt="sm" fz="15">
      Copyright © {year} {fullName} {studentId}
    </Text>
  );
}
