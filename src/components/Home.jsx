import React from 'react'
import SideBar from './SideBar'
import ProfileFeed from './ProfileFeed'
import Blog from './Blog'

const Home = () => {
  let title = 'Convert an array to a Linked List'
  let problemStatement = 'Given an array arr[] of size N. The task is to create a linked list from the given array and return the head of the linked list.'
  let approach = 'In order to convert an array to a linked list, start by defining a reference point. In this case, try to fix the start of the array, which will be the head of the linked list. After fixing the head, iterate through the entire array, convert every element into a node of the linked List, and keep linking them.'
  let algorithm = 'Initially, assign the 0th index element by creating a new node which will be the head of the linked list.Once we have the head(store a reference in the mover node, this mover will always be the last node of the linked list created to date), which has the 0-th index element, the next task is to connect the next set of elements to the LinkedList. In order to do that, iterate through the entire array, and for every element, do the following: Create a new node and assign the i-th index element value to it. Link the previous nodes next to this new node. Assign this node to be the mover node for the next iteration'
  
  return (
    <div className='flex'>
        <SideBar/>
        {/* <ProfileFeed/> */}
        <box>
          <h1 className='text-3xl'> Dsa Questions</h1>
        <Blog title={title} problemStatement={problemStatement} approach={approach} algorithm={algorithm} />
        </box>
        
    </div>
  )
}

export default Home