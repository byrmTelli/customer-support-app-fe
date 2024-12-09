interface CallCenterSectionCardItemProps {
  title: string;
  content: string;
  image: string;
  path: string;
}

interface CallCenterSectionCardComponentProps {
  item: CallCenterSectionCardItemProps;
}

export type CallCenterSectionCardProps = CallCenterSectionCardComponentProps;
