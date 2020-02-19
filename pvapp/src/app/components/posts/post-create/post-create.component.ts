import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostService } from 'src/app/core/services/post.service';
import { Router } from '@angular/router';
import { Post } from '../../shared/models/post.model';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  postGreateForm: FormGroup;

  constructor(private fb: FormBuilder, private postService: PostService, private router: Router) { }

  ngOnInit() {
    this.postGreateForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      author: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      content: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(5000)]],
      image: ['', [Validators.required]]
    })
  }

  postCreate() {
    let postDb = (this.postGreateForm.value) as Post
    postDb.authorId = localStorage.getItem('userId');
    
    console.log(this.postGreateForm.value);
    console.log(postDb);
    this.postService.createPost(postDb).subscribe((data) => {
      this.router.navigate(['/projects'])
    })
  }

}
