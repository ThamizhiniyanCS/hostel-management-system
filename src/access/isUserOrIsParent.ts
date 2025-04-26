import type { Access } from 'payload'

const isUserOrIsParent: Access = ({ req: { user } }) => {
  // Need to be logged in
  if (user) {
    if (user.collection === 'parents' || user.collection === 'users') {
      return true
    }
  }

  return false
}

export default isUserOrIsParent
