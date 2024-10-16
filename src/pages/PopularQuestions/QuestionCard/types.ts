interface QuestionCardContent {
  title: string;
  content: string;
}

interface QuestionCardComponentProps {
  isOpen: boolean;
  data: QuestionCardContent;
}

export type QuestionCardProps = QuestionCardComponentProps;
