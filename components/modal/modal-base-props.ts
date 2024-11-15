export default interface ModalBaseProps<T> {
  onClose(data?: T): void;
}
