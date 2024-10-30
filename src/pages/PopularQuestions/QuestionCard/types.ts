interface QuestionCardContent {
  title: string;
  content: string;
}

interface QuestionCardComponentProps {
  data: QuestionCardContent;
}

export type QuestionCardProps = QuestionCardComponentProps;
