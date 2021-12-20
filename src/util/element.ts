export function appendChild<T extends Node>(node: Node, newChild: T): T {
  return node.appendChild(newChild)
}

export function insertBefore<T extends Node>(
  node: Node,
  newChild: T,
  refChild: Node | null
): T {
  return node.insertBefore(newChild, refChild)
}

export function removeChild<T extends Node>(node: Node, oldChild: T): T {
  return node.removeChild(oldChild)
}

export function prepend<T extends Node>(node: ParentNode, oldChild: T): void {
  return node.prepend(oldChild)
}

export function _removeChildren(element: Element) {
  while (element.firstChild) {
    element.removeChild(element.lastChild!)
  }
}