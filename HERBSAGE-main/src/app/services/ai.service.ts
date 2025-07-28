import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ChatBody, CodeConvertBody } from '../models/requestBody.model';
import { ChatResponse, CodeConvertResponse } from '../models/response.model';

@Injectable({
  providedIn: 'root'
})
export class AiService {
  http = inject(HttpClient)
  getConvertedCode(body: CodeConvertBody){
    const url = "http://localhost:3000/api/ai/convert"
    return this.http.post<CodeConvertResponse>(url,body,{withCredentials: true})
  }
  getChatRes(body: ChatBody){
    const url = "http://localhost:3000/api/ai/chat"
    return this.http.post<ChatResponse>(url,body,{withCredentials: true})
  }
  constructor() { }
}
