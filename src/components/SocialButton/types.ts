export interface ISocialButton {
  type: 'linkedin' | 'github';
  onHandleClick?: onHandleClick;
}

interface onHandleClick {
  (): void
}