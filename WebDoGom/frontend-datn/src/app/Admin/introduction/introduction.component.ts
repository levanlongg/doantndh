import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { IntroductionService } from '../Ad-Service/introduction.service';
// import { UploadService } from '../lib/upload.service';
// import { SystemConstants } from '../lib/system.constants'




@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {
  [x: string]: any;

  @ViewChild('Create', { static: false }) Create: ModalDirective;
  @ViewChild('Update', { static: false }) Update: ModalDirective;
  @ViewChild('View', { static: false }) View: ModalDirective;



  public items: any[];
  public entity: any;
  public id: string;
  public checkedid: any;
  public keyword: string;
  p: number = 1;
  i: number;

  constructor(
    private newstype: IntroductionService,
    private toastr: ToastrService
  ) { }
  ngOnInit(): void {
    this.loadData();
  }

  createSuccess() {
    this.toastr.success('Thêm thành công', 'Thông báo!', { timeOut: 2000 });
  }
  createEror() {
    this.toastr.error('Chưa thêm giới thiệu', 'Thông báo!', { timeOut: 2000 });
  }
  updateSuccess() {
    this.toastr.success('Cập nhật thành công', 'Thông báo!', { timeOut: 2000 });
  }
  updateEror() {
    this.toastr.error('Cập nhật không thành công', 'Thông báo!', { timeOut: 2000 });
  }
  deleteSuccess() {
    this.toastr.success('Xóa thành công', 'Thông báo!', { timeOut: 2000 });
  }
  deleteEror() {
    this.toastr.error('Chưa xóa thông tin giới thiệu', 'Thông báo!', { timeOut: 2000 });
  }

  loadData() {
    this.newstype.getList().subscribe((res: any) => {
      this.items = res;
      console.log(this.items);
    });
  }
  showCreate() {
    this.entity = {};
    this.checkedid = 0;
    this.Create.show();
  }

  showEdit(id: any) {
    this.checkedid = 1;
    this.newstype.GetSingle(id).subscribe((res) => {
      this.entity = res;
    });
    this.Update.show();
  }

  showView(id: any) {
    this.checkedid = 1;
    this.newstype.GetSingle(id).subscribe((res) => {
      this.entity = res;
    });
    this.View.show();
  }

  SaveForm(values: any) {
    if (this.checkedid == 0) {
      this.newstype.postItem(values).subscribe((res) => {
        if (res) {
          var result = confirm("Bạn muốn thêm loại tin?");
          if (result == true) {
            this.loadData();
            this.Create.hide();
            this.createSuccess();
          }
          else {
            this.createEror();
          }
        }
      });
    }
  }

  UpdateForm(values: any) {
    if (this.id = values.id) {
      this.newstype.editItem(this.id, values).subscribe((res) => {
        var result = confirm("Bạn muốn cập nhật loại tin?");
        if (result == true) {
          this.loadData();
          this.Update.hide();
          this.updateSuccess();
        }
        else {
          this.updateEror();
        }
      });
    }
  }

  delete(id: string) {
    var result = confirm("Bạn muốn xóa bản ghi này?");
    if (result == true) {
      this.newstype.delete(id).subscribe((res) => {
        this.loadData();
        this.deleteSuccess();
      });
    }
    else {
      this.deleteEror();
    }
  }

  Search() {
    this.newstype.Search(this.keyword).subscribe((res: any) => {
      this.items = res;
      console.log(this.items);
    }, error => {
      console.log(error);
    });
  }
}
