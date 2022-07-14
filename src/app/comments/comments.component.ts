import { Component, OnInit, Input } from '@angular/core';
import { CommentsService } from '../comments.service';
import { Comment } from 'src/app/models/Comments'
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})


export class CommentsComponent implements OnInit {
  @Input() post!: any

  constructor(private commentService: CommentsService) {}
  comments: Comment[] = [];
  

  comment: string =""

  ngOnInit(): void {
    this.commentService
      .getComment({}).subscribe(comments => this.comments = comments)

  }

  
  onSubmit({value,valid}: NgForm){
    value.post_id = this.post.id
    this.commentService
      .postComment(value)
      .subscribe((comment)=> (this.post.comments.unshift(comment)))
  }
}
