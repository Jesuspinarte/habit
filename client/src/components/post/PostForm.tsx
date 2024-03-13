import { FormEvent, useId, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Editor } from '@tinymce/tinymce-react';
import { Editor as EditorType } from 'tinymce';
import { AppDispatch, RootState } from 'client/src/state/store';
import {
  changePostFormContent,
  publishPostFormContent,
} from 'client/src/state/postForm/postFormSlice';

export interface PostFormProps {
  user?: string;
}

const PostForm: React.FC<PostFormProps> = ({ user }) => {
  // To have the same ID as the server
  const editorId = useId();
  // Editor's ref to react to changes
  const editorRef = useRef<EditorType | null>(null);
  // Form's content on load
  const editorValue = useSelector((state: RootState) => state.postForm.content);
  // Default value when component is redered
  const [initialEditorValue] = useState(editorValue);

  const dispatch = useDispatch<AppDispatch>();

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    dispatch(publishPostFormContent());
  };

  const changeEditorContent = () => {
    if (editorRef.current) {
      dispatch(changePostFormContent(editorRef.current.getContent()));
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <br />
      <Editor
        id={editorId}
        apiKey=""
        onInit={(_, editor) => (editorRef.current = editor)}
        initialValue={initialEditorValue}
        onEditorChange={changeEditorContent}
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'autolink',
            'lists',
            'link',
            'image',
            'preview',
            'searchreplace',
            'visualblocks',
            'fullscreen',
            'table',
            'code',
            'help',
            'wordcount',
          ],
          toolbar:
            'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'table link image preview visualblocks | ' +
            'searchreplace removeformat | fullscreen help',
          content_style:
            'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
        }}
      />
      <br />
      <button type="submit">Post!</button>
    </form>
  );
};

export default PostForm;
