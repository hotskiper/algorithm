def solution(A, B):
    # Implement your solution here
    alive = 0
    down_fish = []
    for i in range(len(B)):
        b = B[i]
        if b == 0:
            if len(down_fish) == 0: 
                alive += 1
            else:
                while down_fish[-1] < A[i]:
                    down_fish.pop()
                    if len(down_fish) == 0:
                        alive += 1
                        break
        else:
            down_fish.append(A[i])
    
    return len(down_fish) + alive