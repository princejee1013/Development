#include<iostream>
#include<vector>
#include<unordered_set>

using namespace std;

bool isvalid(vector<vector<char>> & board){
    vector<unordered_set<char>> rows(9);

    vector<unordered_set<char>> cols(9);

    vector<unordered_set<char>> subboxes(9);



    for(int r=0;r<9;r++){
        for(int c=0;c<9;c++){
            char val=board[r][c];

            if(val=='.'){
                continue;
            }

            if(rows[r].count(val))
            return false;

            if(cols[c].count(val))
            return false;

            cols[c].insert(val);

            int boxInd=(r/3)*3+(c/3);


            if(subboxes[boxInd].count(val)) return false;
            subboxes[boxInd].insert(val);

        }
    }

    return true;
}

int main(){
    vector<vector<char>> board= {{"5","3",".",".","7",".",".",".","."}
,{"6",".",".","1","9","5",".",".","."}
,{".","9","8",".",".",".",".","6","."}
,{"8",".",".",".","6",".",".",".","3"}
,{"4",".",".","8",".","3",".",".","1"}
,{"7",".",".",".","2",".",".",".","6"}
,{".","6",".",".",".",".","2","8","."}
,{".",".",".","4","1","9",".",".","5"}
,{".",".",".",".","8",".",".","7","9"}};

if(isvalid(board)){
    cout<<"valid"<<endl;

}else{
    cout<<"invalid"<<endl;
}
 return 0;



}