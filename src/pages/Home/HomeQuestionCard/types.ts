interface CardProps {
  title: string;
  content: string;
}

interface HomeQuestionCardComponentProps {
  card: CardProps;
  isOpen: boolean;
  onToggle: () => void;
}

export type HomeQuestionCardProps = HomeQuestionCardComponentProps;
