import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-uploader',
  standalone: true,
  imports: [HttpClientModule, FormsModule, CommonModule],
  templateUrl: './uploader.component.html',
  styleUrl: './uploader.component.css',
})
export class UploaderComponent {
  upload: boolean = false;

  fileUrl: string = 'https://api.escuelajs.co/api/v1/files/';

  uploadedFiles: IRes[] = JSON.parse(
    localStorage.getItem('uploadedFiles') || '[]'
  );

  constructor(private _HttpClient: HttpClient) {}

  onFileSelected(event: any) {
    const file: File = event.currentTarget.files[0];

    if (
      (file.type === 'image/jpeg' ||
        file.type === 'image/png' ||
        file.type === 'image/jpg') &&
      file.size < 2000000
    ) {
      this.upload = true;
      const formData = new FormData();
      formData.append('file', file);

      this._HttpClient
        .post('https://api.escuelajs.co/api/v1/files/upload', formData)
        .subscribe({
          next: (res: any) => {
            console.log(res);
            this.uploadedFiles.push(res);

            localStorage.setItem(
              'uploadedFiles',
              JSON.stringify(this.uploadedFiles)
            );

            this.upload = false;
          },

          error: (error) => {
            console.error(error);
            this.upload = false;
          },
        });
    } else {
      if (file.size > 2000000) {
        alert('File size must be less than 2MB');
      } else {
        alert('File must be an image');
      }

      this.upload = false;
      event.currentTarget.value = '';
    }
  }

  downloadFile(url: string, fileName: string) {
    this._HttpClient
      .get(url, { responseType: 'blob' })
      .subscribe((res: Blob) => {
        const url = window.URL.createObjectURL(res);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      });
  }

  removeFile(index: number) {
    this.uploadedFiles.splice(index, 1);
    localStorage.setItem('uploadedFiles', JSON.stringify(this.uploadedFiles));
  }
}

interface IRes {
  filename: string;
  location: string;
  originalname: string;
}
