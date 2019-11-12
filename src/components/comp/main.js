import React from 'react'

import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './approvalCard';

export default function main() {
    return (
        <div className="ui container comments">
            
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to do this ?
                </div>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author="Sam" 
                    timeAgo="Today at 4:45PM" 
                    avatar={faker.image.avatar()} 
                    content="Some text for Sam"    
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail 
                    author="Rob" 
                    timeAgo="Today at 2:00AM" 
                    avatar={faker.image.avatar()} 
                    content="Some text for Rob"   
                />
            </ApprovalCard>  

            <ApprovalCard>
                <CommentDetail 
                    author="Alex" 
                    timeAgo="Yesterday at 5:00PM" 
                    avatar={faker.image.avatar()} 
                    content="Some text for Alex"     
                />
            </ApprovalCard>                
                      
        </div>
    )
}
